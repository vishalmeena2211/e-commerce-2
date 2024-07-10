const Rating = require('../models/Rating'); // Import the Rating model
const Product = require('../models/Product'); // Import the Product model

// Create a new rating for a product
exports.createRating = (req, res) => {
  const { user, product, rating, comment } = req.body;

  // Check if the product exists
  Product.findById(product, (err, foundProduct) => {
    if (err || !foundProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const newRating = new Rating({ user, product, rating, comment });

    newRating.save((err, rating) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.status(201).json(rating);
    });
  });
};

// Get ratings for a specific product
exports.getRatingsByProduct = (req, res) => {
  const productId = req.params.productId;

  Rating.find({ product: productId })
    .populate('user', 'name') // Populate the user field with the name
    .exec((err, ratings) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(ratings);
    });
};

// Delete a rating by ID
exports.deleteRating = (req, res) => {
  const ratingId = req.params.ratingId;

  Rating.findByIdAndRemove(ratingId, (err, deletedRating) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!deletedRating) {
      return res.status(404).json({ error: 'Rating not found' });
    }
    res.json({ message: 'Rating deleted successfully' });
  });
};
