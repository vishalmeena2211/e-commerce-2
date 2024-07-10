const mongoose = require('mongoose');

// Define the Product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true
  },
  brand: String,
  image: String, // You can store the URL of the product image
  stockQuantity: {
    type: Number,
    required: true,
    min: 0
  },
  ratings: [{
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Assuming you have a User schema
    rating: { type: Number, required: true, min: 1, max: 5 }
  }],
  reviews: [{
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    text: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create the Product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
