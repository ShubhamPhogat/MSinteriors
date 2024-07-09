const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Connect Database
connectDB();


// Middleware
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

app.get('/', (req, res) => {
  res.send('Welcome to the Server!');
});

module.exports = app;
