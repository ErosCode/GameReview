const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Import Routes
const authRoute = require('./routes/auth');
const gameRoute = require('./routes/games');
const postRoute = require('./routes/posts');
const usersRoute = require('./routes/users');




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
app.use('/api', gameRoute);
app.use('/api/posts', postRoute);
app.use('/api/users', usersRoute);


app.listen(3002, () => console.log('Server Up and Running'));