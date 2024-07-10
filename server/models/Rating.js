const mongoose = require('mongoose');

// Rating Schema
const ratingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the user who made the rating
    required: true
  },
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product', // Reference to the item being rated (e.g., Product)
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1, // Minimum rating value
    max: 5, // Maximum rating value
  },
  comment: {
    type: String,
    required: false // Optional comment or review text
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Rating Model
const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;
