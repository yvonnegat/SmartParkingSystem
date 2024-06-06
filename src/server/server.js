require('dotenv').config({ path: './.env' });
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const crypto = require('crypto');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Setup MongoDB URI
const mongoUri = process.env.MONGODB_URI || 'your-default-mongo-uri';

// Connect to MongoDB
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((err) => {
  console.error('Error connecting to MongoDB Atlas:', err.message);
});

// Middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true,
}));

// Generate a secure secret key
const secretKey = crypto.randomBytes(32).toString('hex');

// Session configuration
app.use(session({
  secret: secretKey,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: mongoUri }),
  cookie: { secure: false } // Set to true if using HTTPS
}));

// Define a root route to handle requests to the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Smart City Project API');
});

// Import and use auth routes
const authRoutes = require('../Routes/auth');
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Internal Server Error: ${err.message}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
