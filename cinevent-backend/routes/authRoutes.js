const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const {
  registerSpectator,
  registerOrganizer,
  login,
  logout,
  forgotPassword,
  resetPassword,
  getMe,
} = require('../controllers/authController');
const { protect } = require('../middleware/auth');
const {
  validateRegisterSpectator,
  validateRegisterOrganizer,
  validateLogin,
  validateForgotPassword,
  validateResetPassword,
} = require('../middleware/validation');

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { success: false, message: 'Too many requests, please try again later.' },
});

const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { success: false, message: 'Too many requests, please try again later.' },
});

router.post('/register/spectator', authLimiter, validateRegisterSpectator, registerSpectator);
router.post('/register/organizer', authLimiter, validateRegisterOrganizer, registerOrganizer);
router.post('/login', authLimiter, validateLogin, login);
router.post('/logout', generalLimiter, protect, logout);
router.post('/forgot-password', authLimiter, validateForgotPassword, forgotPassword);
router.put('/reset-password/:token', authLimiter, validateResetPassword, resetPassword);
router.get('/me', generalLimiter, protect, getMe);

module.exports = router;
