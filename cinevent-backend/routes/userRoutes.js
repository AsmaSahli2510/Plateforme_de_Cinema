const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const {
  getMyProfile,
  updateSpectatorProfile,
  updateOrganizerProfile,
} = require('../controllers/userController');
const { protect, authorize } = require('../middleware/auth');
const {
  validateUpdateSpectatorProfile,
  validateUpdateOrganizerProfile,
} = require('../middleware/validation');

const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { success: false, message: 'Too many requests, please try again later.' },
});

router.get('/me', generalLimiter, protect, getMyProfile);
router.put('/me/spectator', generalLimiter, protect, authorize('spectator'), validateUpdateSpectatorProfile, updateSpectatorProfile);
router.put('/me/organizer', generalLimiter, protect, authorize('organizer'), validateUpdateOrganizerProfile, updateOrganizerProfile);

module.exports = router;
