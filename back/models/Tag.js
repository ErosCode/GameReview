const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tagSchema = new Schema({
    name: {
        type: String,
        require: true,
        max: 1024,
        min: 2
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Tag = mongoose.model('Tag', tagSchema);
module.exports = Tag;