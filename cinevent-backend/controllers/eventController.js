const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  try {
    const { title, description, movie, date, time, location, price, seatsAvailable, status } = req.body;

    const event = await Event.create({
      title,
      description,
      movie,
      date,
      time,
      location,
      price,
      seatsAvailable,
      status,
      organizer: req.user._id,
    });

    res.status(201).json({ success: true, event });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ success: false, message: err.message });
    }
    res.status(500).json({ success: false, message: 'Failed to create event' });
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, events });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve events' });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }
    res.status(200).json({ success: true, event });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ success: false, message: 'Invalid event ID' });
    }
    res.status(500).json({ success: false, message: 'Failed to retrieve event' });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }

    const isOrganizer = event.organizer.toString() === req.user._id.toString();
    const isAdmin = req.user.role === 'admin';

    if (!isOrganizer && !isAdmin) {
      return res.status(403).json({ success: false, message: 'Not authorized to update this event' });
    }

    const { title, description, movie, date, time, location, price, seatsAvailable, status } = req.body;

    const updated = await Event.findByIdAndUpdate(
      req.params.id,
      { title, description, movie, date, time, location, price, seatsAvailable, status },
      { new: true, runValidators: true }
    );

    res.status(200).json({ success: true, event: updated });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ success: false, message: 'Invalid event ID' });
    }
    if (err.name === 'ValidationError') {
      return res.status(400).json({ success: false, message: err.message });
    }
    res.status(500).json({ success: false, message: 'Failed to update event' });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }

    const isOrganizer = event.organizer.toString() === req.user._id.toString();
    const isAdmin = req.user.role === 'admin';

    if (!isOrganizer && !isAdmin) {
      return res.status(403).json({ success: false, message: 'Not authorized to delete this event' });
    }

    await event.deleteOne();

    res.status(200).json({ success: true, message: 'Event deleted successfully' });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ success: false, message: 'Invalid event ID' });
    }
    res.status(500).json({ success: false, message: 'Failed to delete event' });
  }
};
