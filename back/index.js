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
const reviewsRoute = require('./routes/reviews');
const tagsRoute = require('./routes/tags');
const homeRoute = require('./routes/home');




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
app.use('/api/', authRoute);
app.use('/api/games', gameRoute);
app.use('/api/posts', postRoute);
app.use('/api/users', usersRoute);
app.use('/api/reviews', reviewsRoute);
app.use('/api/tags', tagsRoute);
app.use('/api/home', homeRoute);

app.get('/',(req,res) => {
  return res.send('Hello World! This is me!');
  });


app.listen(process.env.PORT || 3002, () => console.log('Server Up and Running'));