const User = require('../models/User'); // Import the User model

// Create a new user
exports.createUser = (req, res) => {
  const user = new User(req.body);
  user.save((err, newUser) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.status(201).json(newUser);
  });
};

// Get user by ID
exports.getUserById = (req, res, next, userId) => {
  User.findById(userId).exec((err, user) => {
    if (err || !user) {
      return res.status(404).json({ error: 'User not found' });
    }
    req.profile = user;
    next();
  });
};

// Get a user's profile
exports.getUserProfile = (req, res) => {
  // The user object is available in the request due to the middleware
  return res.json(req.profile);
};

// Update user profile
exports.updateUserProfile = (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true },
    (err, user) => {
      if (err) {
        return res.status(400).json({ error: 'User not authorized to perform this action' });
      }
      res.json(user);
    }
  );
};
