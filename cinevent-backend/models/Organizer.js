const mongoose = require('mongoose');

const organizerSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    organizationName: {
      type: String,
      required: true,
      trim: true,
    },
    validationStatus: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
    iban: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    organizationDescription: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Organizer = mongoose.model('Organizer', organizerSchema);

module.exports = Organizer;
