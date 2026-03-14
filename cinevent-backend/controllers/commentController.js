const Comment = require('../models/Comment');
const Event = require('../models/Event');

exports.createComment = async (req, res) => {
  try {
    const { event, message, rating } = req.body;

    const existingEvent = await Event.findById(event);
    if (!existingEvent) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }

    const comment = await Comment.create({
      user: req.user._id,
      event,
      message,
      rating,
    });

    res.status(201).json({ success: true, comment });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ success: false, message: err.message });
    }
    if (err.name === 'CastError') {
      return res.status(400).json({ success: false, message: 'Invalid event ID' });
    }
    res.status(500).json({ success: false, message: 'Failed to create comment' });
  }
};

exports.getCommentsByEvent = async (req, res) => {
  try {
    const comments = await Comment.find({ event: req.params.eventId })
      .populate('user', 'firstName lastName')
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, comments });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ success: false, message: 'Invalid event ID' });
    }
    res.status(500).json({ success: false, message: 'Failed to retrieve comments' });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ success: false, message: 'Comment not found' });
    }

    const isOwner = comment.user.toString() === req.user._id.toString();
    const isAdmin = req.user.role === 'admin';

    if (!isOwner && !isAdmin) {
      return res.status(403).json({ success: false, message: 'Not authorized to delete this comment' });
    }

    await comment.deleteOne();

    res.status(200).json({ success: true, message: 'Comment deleted successfully' });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ success: false, message: 'Invalid comment ID' });
    }
    res.status(500).json({ success: false, message: 'Failed to delete comment' });
  }
};
