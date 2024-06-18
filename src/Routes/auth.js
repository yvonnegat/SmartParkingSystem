const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../Model/User');
const router = express.Router();
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'your-default-secret'; // Ensure consistent use of JWT_SECRET

function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
      return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token.split(' ')[1], JWT_SECRET, (err, decoded) => { // Extract the token from the Authorization header
      if (err) {
          return res.status(403).json({ message: 'Failed to authenticate token' });
      }
      req.user = decoded;
      next();
  });
}

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

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

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    // Compare the provided password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

    // Set the token in an HTTP-only cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600000 // 1 hour
    });

    // Send response indicating successful login
    res.json({ msg: 'Login successful' });
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

// Get current user data
router.get('/current-user', async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    jwt.verify(token, JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ msg: 'Token is not valid' });
      }

      const user = await User.findById(decoded.id);

      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }

      res.json({ user });
    });
  } catch (error) {
    console.error('Error fetching current user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update user information
router.put('/update', verifyToken, async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const updateData = { firstName, lastName, email };
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateData.password = hashedPassword;
    }

    const user = await User.findByIdAndUpdate(req.user.id, updateData, { new: true });
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    res.json({ msg: 'Account updated successfully', user });
  } catch (err) {
    console.error('Error updating user:', err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
