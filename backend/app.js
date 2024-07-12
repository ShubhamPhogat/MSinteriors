const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const imageRoutes = require('./routes/imageRoute'); // Add imageRoutes
const app = express();
// Connect Database
connectDB();

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

// Middleware https://ms-frontend-six.vercel.app/
const corsOptions = {
  origin: 'https://ms-frontend-six.vercel.app/', // specify your frontend origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // allow cookies and other credentials
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // enable pre-flight across-the-board

app.use(express.json());

// Routes
app.use('/api', userRoutes);
app.use('/api', imageRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Server!');
});

module.exports = app;
