const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    /*username: {
        type: String,
        require: true,
        max: 255,
        min: 6
    },*/
    review_text: {
        type: String,
        require: true,
        max: 3200,
        min: 20
        },
    review_graphics: {
            type: Number,
            require: true,
            max: 20,
            min: 0
    },
    review_story: {
            type: Number,
            require: true,
            max: 20,
            min: 0
    },
    review_animation: {
            type: Number,
            require: true,
            max: 20,
            min: 0
    },
    review_writing: {
        type: Number,
        require: true,
        max: 20,
        min: 0
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    createdAt: Date
  });

module.exports = mongoose.model('Review', reviewSchema)