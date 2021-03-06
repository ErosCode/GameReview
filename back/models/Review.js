const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./User');

const reviewSchema = new Schema({
    review_text: {
        type: String,
        require: true,
        max: 3200,
        min: 20
        },
    review_graphics: {
            type: Number,
            require: true,
            max: 10,
            min: 0
    },
    review_story: {
            type: Number,
            require: true,
            max: 10,
            min: 0
    },
    review_animation: {
            type: Number,
            require: true,
            max: 10,
            min: 0
    },
    review_writing: {
        type: Number,
        require: true,
        max: 10,
        min: 0
    },
    review_likes: {
        type: Number,
        default: 0,
        max: 999,
        min: 0
    },
    review_rate: {
        type: Number,
        require: true,
        max: 10,
        min: 0
    },
    game: {
        type: Schema.Types.ObjectId,
        ref: "Game"
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    date: {
        type: Date,
        default: Date.now
    }
  });

 const Review = mongoose.model('Review', reviewSchema);
 module.exports = Review;