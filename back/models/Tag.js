const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tagSchema = new Schema({
    name: {
        type: String,
        require: true,
        max: 255,
        min: 2
    },
    games: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Game"
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

const Tag = mongoose.model('Tag', tagSchema);
module.exports = Tag;