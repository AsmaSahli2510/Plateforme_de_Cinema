const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const protect = require('../middleware/auth');
const {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} = require('../controllers/eventController');

const eventLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { success: false, message: 'Too many requests, please try again later.' },
});

router.post('/', eventLimiter, protect, createEvent);
router.get('/', eventLimiter, getAllEvents);
router.get('/:id', eventLimiter, getEventById);
router.put('/:id', eventLimiter, protect, updateEvent);
router.delete('/:id', eventLimiter, protect, deleteEvent);

module.exports = router;
