const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
dotenv.config();
const userRoutes = require('./routes/userRoutes');
// Initialize express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
connectDB();
app.use(cors());

// Set EJS as the view engine


// Routes
app.use('/', userRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
  });
// Start the server
app.listen(port , () => {
     
    console.log(`Server is running on http://localhost:${port}`);
  });  