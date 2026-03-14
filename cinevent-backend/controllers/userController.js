const User = require('../models/User');
const Spectator = require('../models/Spectator');
const Organizer = require('../models/Organizer');

exports.getMyProfile = async (req, res, next) => {
  try {
    const user = req.user;
    let profile = null;

    if (user.role === 'spectator') {
      profile = await Spectator.findOne({ user: user._id });
    } else if (user.role === 'organizer') {
      profile = await Organizer.findOne({ user: user._id });
    }

    res.status(200).json({
      success: true,
      data: {
        user,
        profile,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.updateSpectatorProfile = async (req, res, next) => {
  try {
    const { firstName, lastName, phone, avatar } = req.body;

    const userUpdates = {};
    if (firstName !== undefined) userUpdates.firstName = firstName;
    if (lastName !== undefined) userUpdates.lastName = lastName;

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { $set: userUpdates },
      { new: true, runValidators: true }
    );

    const spectatorUpdates = {};
    if (phone !== undefined) spectatorUpdates.phone = phone;
    if (avatar !== undefined) spectatorUpdates.avatar = avatar;

    const updatedSpectator = await Spectator.findOneAndUpdate(
      { user: req.user._id },
      { $set: spectatorUpdates },
      { new: true, upsert: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: 'Spectator profile updated successfully',
      data: {
        user: updatedUser,
        profile: updatedSpectator,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.updateOrganizerProfile = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      organizationName,
      iban,
      phone,
      organizationDescription,
    } = req.body;

    const userUpdates = {};
    if (firstName !== undefined) userUpdates.firstName = firstName;
    if (lastName !== undefined) userUpdates.lastName = lastName;

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { $set: userUpdates },
      { new: true, runValidators: true }
    );

    const organizerUpdates = {};
    if (organizationName !== undefined) organizerUpdates.organizationName = organizationName;
    if (iban !== undefined) organizerUpdates.iban = iban;
    if (phone !== undefined) organizerUpdates.phone = phone;
    if (organizationDescription !== undefined)
      organizerUpdates.organizationDescription = organizationDescription;

    const updatedOrganizer = await Organizer.findOneAndUpdate(
      { user: req.user._id },
      { $set: organizerUpdates },
      { new: true, upsert: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: 'Organizer profile updated successfully',
      data: {
        user: updatedUser,
        profile: updatedOrganizer,
      },
    });
  } catch (err) {
    next(err);
  }
};
