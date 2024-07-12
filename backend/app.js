const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const userRoutes = require('./routes/userRoutes.js');
const imageRoutes = require('./routes/imageRoute.js');

const app = express();

// Connect Database
connectDB();

// Middleware to handle CORS
const corsOptions = {
  origin: '*', // Allow all origins
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'X-Requested-With,content-type',
  credentials: true, // Allow cookies and other credentials
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Enable pre-flight across-the-board

// Middleware to handle JSON body parsing
app.use(express.json());

// Routes
app.use('/api', userRoutes);
app.use('/api', imageRoutes);

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to the Server!');
});

// Custom middleware for Vercel's serverless function handling
module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  res.json({ message: 'Hello from Vercel!' });
};

module.exports = app;