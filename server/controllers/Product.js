const Product = require('../models/Product'); // Import the Product model

// Create a new product
exports.createProduct = (req, res) => {
  const product = new Product(req.body);
  product.save((err, newProduct) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.status(201).json(newProduct);
  });
};

// Get a product by ID
exports.getProductById = (req, res, next, productId) => {
  Product.findById(productId).exec((err, product) => {
    if (err || !product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    req.product = product;
    next();
  });
};

// Get a product's details
exports.getProductDetails = (req, res) => {
  return res.json(req.product);
};

// Update a product
exports.updateProduct = (req, res) => {
  Product.findByIdAndUpdate(
    { _id: req.product._id },
    { $set: req.body },
    { new: true },
    (err, product) => {
      if (err) {
        return res.status(400).json({ error: 'Product not authorized to perform this action' });
      }
      res.json(product);
    }
  );
};
