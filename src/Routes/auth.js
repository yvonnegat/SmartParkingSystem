const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../Model/User');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const crypto = require('crypto');
const mongoose = require('mongoose');
const router = express.Router();

// Generate a secure secret key
const secretKey = crypto.randomBytes(32).toString('hex');

// Use the secret key in your session configuration
const mongoUri = process.env.MONGODB_URI || 'your-default-mongo-uri';

// Session configuration
router.use(session({
  secret: secretKey,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: mongoUri }),
  cookie: { secure: false } // Set to true if using HTTPS
}));

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create new user
    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error('Error registering user:', err.message);
    res.status(500).send('Server error');
  }
});

// Login user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ msg: 'Email and password are required' });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    // Store user ID in session
    req.session.userId = user._id;

    res.json({ msg: 'Login successful', user });
  } catch (err) {
    console.error('Error logging in user:', err.message);
    res.status(500).send('Server error');
  }
});

// Logout user
router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error logging out user:', err.message);
      return res.status(500).send('Server error');
    }
    res.clearCookie('connect.sid');
    res.json({ msg: 'Logout successful' });
  });
});

module.exports = router;
