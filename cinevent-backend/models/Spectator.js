const mongoose = require('mongoose');

const spectatorSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    avatar: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Spectator = mongoose.model('Spectator', spectatorSchema);

module.exports = Spectator;
