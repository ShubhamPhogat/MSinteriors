const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const imageRoutes = require('./routes/imageRoute'); // Add imageRoutes

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', userRoutes);
app.use('/api', imageRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Server!');
});

module.exports = app;
