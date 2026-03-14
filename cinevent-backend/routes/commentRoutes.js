const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const protect = require('../middleware/auth');
const {
  createComment,
  getCommentsByEvent,
  deleteComment,
} = require('../controllers/commentController');

const commentLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { success: false, message: 'Too many requests, please try again later.' },
});

router.post('/', commentLimiter, protect, createComment);
router.get('/event/:eventId', commentLimiter, getCommentsByEvent);
router.delete('/:id', commentLimiter, protect, deleteComment);

module.exports = router;
