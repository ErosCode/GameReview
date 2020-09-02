const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Review = require('./Review');

const userSchema = new Schema({
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
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre('remove', async function(next) {
    try {
        await Review.remove({
            "_id": {
                $in: this.reviews
            }
        });
        next;
    } catch(err) {     
        next(err);
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;