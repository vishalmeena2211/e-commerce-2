const Order = require('../models/Order'); // Import the Order model
const Product = require('../models/Product'); // Import the Product model

// Create a new order
exports.createOrder = (req, res) => {
  const { user, products } = req.body;

  // Check if the products in the order exist
  Product.find({ _id: { $in: products.map(item => item.product) } }, (err, foundProducts) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (foundProducts.length !== products.length) {
      return res.status(400).json({ error: 'One or more products not found' });
    }

    const total = products.reduce((acc, item) => {
      const product = foundProducts.find(p => p._id.toString() === item.product.toString());
      return acc + product.price * item.quantity;
    }, 0);

    const order = new Order({ user, products, total });
    order.save((err, newOrder) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.status(201).json(newOrder);
    });
  });
};

// Get orders for a specific user
exports.getOrdersByUser = (req, res) => {
  const userId = req.params.userId;

  Order.find({ user: userId })
    .populate('products.product', 'name price') // Populate product information
    .exec((err, orders) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(orders);
    });
};

// Get order details by ID
exports.getOrderDetails = (req, res) => {
  const orderId = req.params.orderId;

  Order.findById(orderId)
    .populate('user', 'name') // Populate user information
    .populate('products.product', 'name price') // Populate product information
    .exec((err, order) => {
      if (err || !order) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.json(order);
    });
};
