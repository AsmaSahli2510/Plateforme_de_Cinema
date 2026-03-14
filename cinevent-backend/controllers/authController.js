const crypto = require('crypto');
const User = require('../models/User');
const Spectator = require('../models/Spectator');
const Organizer = require('../models/Organizer');
const { sendEmail } = require('../utils/emailService');

exports.registerSpectator = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already in use' });
    }

    const user = await User.create({ firstName, lastName, email, password, role: 'spectator' });
    await Spectator.create({ user: user._id });

    const token = user.generateAuthToken();

    res.status(201).json({
      success: true,
      message: 'Spectator registered successfully',
      token,
      data: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.registerOrganizer = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, organizationName } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already in use' });
    }

    const user = await User.create({ firstName, lastName, email, password, role: 'organizer' });
    await Organizer.create({ user: user._id, organizationName });

    const token = user.generateAuthToken();

    res.status(201).json({
      success: true,
      message: 'Organizer registered successfully',
      token,
      data: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        organizationName,
        validationStatus: 'pending',
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    if (!user.isActive) {
      return res.status(401).json({ success: false, message: 'Account is deactivated' });
    }

    const token = user.generateAuthToken();

    res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      data: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.logout = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Logged out successfully. Please remove your token on the client side.',
  });
};

exports.forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: 'No account found with that email' });
    }

    const resetToken = user.generateResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    const resetUrl = `${process.env.CLIENT_URL || 'http://localhost:3000'}/reset-password/${resetToken}`;

    await sendEmail({
      to: user.email,
      subject: 'Password Reset Request',
      html: `
        <p>You requested a password reset.</p>
        <p>Click the link below to reset your password (valid for 10 minutes):</p>
        <a href="${resetUrl}">${resetUrl}</a>
        <p>If you did not request this, please ignore this email.</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: 'Password reset email sent',
    });
  } catch (err) {
    next(err);
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
    const hashedToken = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex');

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid or expired reset token' });
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    const token = user.generateAuthToken();

    res.status(200).json({
      success: true,
      message: 'Password reset successful',
      token,
    });
  } catch (err) {
    next(err);
  }
};

exports.getMe = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      data: req.user,
    });
  } catch (err) {
    next(err);
  }
};
