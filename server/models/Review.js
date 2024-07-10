const mongoose = require('mongoose');

// Review Schema
const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the user who wrote the review
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product', // Reference to the product being reviewed
    required: true
  },
  text: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1, // Minimum rating value
    max: 5, // Maximum rating value
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Review Model
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
