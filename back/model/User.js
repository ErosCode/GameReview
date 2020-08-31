const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        max: 255,
        min: 6
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password: {
        type: String,
        require: true,
        max: 1024,
        min: 6
    },
    reviews: [{
        review_text: {
            type: String,
            require: true,
            max: 3200,
            min: 20
        },
        review_graphics: {
            type: Number,
            require: true,
            max: 2,
            min: 1
        },
        review_story: {
            type: Number,
            require: true,
            max: 2,
            min: 1
        },
        review_animation: {
            type: Number,
            require: true,
            max: 2,
            min: 1
        },
        review_writing: {
            type: Number,
            require: true,
            max: 2,
            min: 1
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema)