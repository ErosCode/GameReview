const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    name: {
        type: String,
        require: true,
        max: 255,
        min: 2
    },
    imgURL: {
        type: String,
    },
    description: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    note: {
        type: Number,
        require: true,
        max: 20,
        min: 0
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;