const { body, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
    });
  }
  next();
};

const validateRegisterSpectator = [
  body('firstName').trim().notEmpty().withMessage('First name is required'),
  body('lastName').trim().notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Please provide a valid email').normalizeEmail(),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  handleValidationErrors,
];

const validateRegisterOrganizer = [
  body('firstName').trim().notEmpty().withMessage('First name is required'),
  body('lastName').trim().notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Please provide a valid email').normalizeEmail(),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  body('organizationName').trim().notEmpty().withMessage('Organization name is required'),
  handleValidationErrors,
];

const validateLogin = [
  body('email').isEmail().withMessage('Please provide a valid email').normalizeEmail(),
  body('password').notEmpty().withMessage('Password is required'),
  handleValidationErrors,
];

const validateForgotPassword = [
  body('email').isEmail().withMessage('Please provide a valid email').normalizeEmail(),
  handleValidationErrors,
];

const validateResetPassword = [
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  handleValidationErrors,
];

const validateUpdateSpectatorProfile = [
  body('firstName').optional().trim().notEmpty().withMessage('First name cannot be empty'),
  body('lastName').optional().trim().notEmpty().withMessage('Last name cannot be empty'),
  body('phone').optional().trim(),
  body('avatar').optional().trim(),
  handleValidationErrors,
];

const validateUpdateOrganizerProfile = [
  body('firstName').optional().trim().notEmpty().withMessage('First name cannot be empty'),
  body('lastName').optional().trim().notEmpty().withMessage('Last name cannot be empty'),
  body('organizationName')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('Organization name cannot be empty'),
  body('iban').optional().trim(),
  body('phone').optional().trim(),
  body('organizationDescription').optional().trim(),
  handleValidationErrors,
];

module.exports = {
  validateRegisterSpectator,
  validateRegisterOrganizer,
  validateLogin,
  validateForgotPassword,
  validateResetPassword,
  validateUpdateSpectatorProfile,
  validateUpdateOrganizerProfile,
};
