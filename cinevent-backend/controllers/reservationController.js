const Reservation = require('../models/Reservation');
const Event = require('../models/Event');

exports.createReservation = async (req, res) => {
  try {
    const { eventId, seats } = req.body;

    // Atomically check and decrement seatsAvailable to prevent overbooking
    const event = await Event.findOneAndUpdate(
      { _id: eventId, seatsAvailable: { $gte: seats } },
      { $inc: { seatsAvailable: -seats } },
      { new: true }
    );

    if (!event) {
      const eventExists = await Event.findById(eventId);
      if (!eventExists) {
        return res.status(404).json({ success: false, message: 'Event not found' });
      }
      return res.status(400).json({ success: false, message: 'Not enough seats available' });
    }

    const totalPrice = seats * event.price;

    const reservation = await Reservation.create({
      user: req.user._id,
      event: eventId,
      seats,
      totalPrice,
    });

    res.status(201).json({ success: true, reservation });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ success: false, message: err.message });
    }
    if (err.name === 'CastError') {
      return res.status(400).json({ success: false, message: 'Invalid event ID' });
    }
    res.status(500).json({ success: false, message: 'Failed to create reservation' });
  }
};

exports.getMyReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find({ user: req.user._id })
      .populate('event')
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, reservations });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve reservations' });
  }
};

exports.getReservationsByEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);
    if (!event) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }

    const isOrganizer = event.organizer.toString() === req.user._id.toString();
    const isAdmin = req.user.role === 'admin';

    if (!isOrganizer && !isAdmin) {
      return res.status(403).json({ success: false, message: 'Not authorized to view these reservations' });
    }

    const reservations = await Reservation.find({ event: req.params.eventId })
      .populate('user', 'firstName lastName email')
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, reservations });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ success: false, message: 'Invalid event ID' });
    }
    res.status(500).json({ success: false, message: 'Failed to retrieve reservations' });
  }
};

exports.cancelReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) {
      return res.status(404).json({ success: false, message: 'Reservation not found' });
    }

    const isOwner = reservation.user.toString() === req.user._id.toString();
    const isAdmin = req.user.role === 'admin';

    if (!isOwner && !isAdmin) {
      return res.status(403).json({ success: false, message: 'Not authorized to cancel this reservation' });
    }

    // Atomically update status to cancelled only if not already cancelled
    const updated = await Reservation.findOneAndUpdate(
      { _id: req.params.id, status: { $ne: 'cancelled' } },
      { status: 'cancelled' },
      { new: true }
    );

    if (!updated) {
      return res.status(400).json({ success: false, message: 'Reservation is already cancelled' });
    }

    await Event.findByIdAndUpdate(updated.event, {
      $inc: { seatsAvailable: updated.seats },
    });

    res.status(200).json({ success: true, message: 'Reservation cancelled successfully', reservation: updated });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ success: false, message: 'Invalid reservation ID' });
    }
    res.status(500).json({ success: false, message: 'Failed to cancel reservation' });
  }
};
