const Review = require('../models/Review'); // Import the Review model
const Product = require('../models/Product'); // Import the Product model

// Create a new review for a product
exports.createReview = (req, res) => {
  const { user, product, text, rating } = req.body;
  
  // Check if the product exists
  Product.findById(product, (err, foundProduct) => {
    if (err || !foundProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    const review = new Review({ user, product, text, rating });
    
    review.save((err, newReview) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.status(201).json(newReview);
    });
  });
};

// Get reviews for a specific product
exports.getReviewsByProduct = (req, res) => {
  const productId = req.params.productId;
  
  Review.find({ product: productId })
    .populate('user', 'name') // Populate the user field with the name
    .exec((err, reviews) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(reviews);
    });
};

// Delete a review by ID
exports.deleteReview = (req, res) => {
  const reviewId = req.params.reviewId;
  
  Review.findByIdAndRemove(reviewId, (err, deletedReview) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!deletedReview) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.json({ message: 'Review deleted successfully' });
  });
};
