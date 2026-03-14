const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const protect = require('../middleware/auth');
const {
  createReservation,
  getMyReservations,
  getReservationsByEvent,
  cancelReservation,
} = require('../controllers/reservationController');

const reservationLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { success: false, message: 'Too many requests, please try again later.' },
});

router.post('/', reservationLimiter, protect, createReservation);
router.get('/me', reservationLimiter, protect, getMyReservations);
router.get('/event/:eventId', reservationLimiter, protect, getReservationsByEvent);
router.patch('/:id/cancel', reservationLimiter, protect, cancelReservation);

module.exports = router;
