const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');


dotenv.config();

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECT, 
  { useUnifiedTopology: true },
  () => console.log('connected to db')
);

// Middleware
app.use(cors());
app.use(express.json());

// Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(3002, () => console.log('Server Up and Running'));