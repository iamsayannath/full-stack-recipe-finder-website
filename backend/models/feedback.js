const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  recipeName: {
    type: String,
    required: true,
    trim: true,
  },
  feedbackMsg: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;