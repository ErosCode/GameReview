const Review = require('../models/Review');
const User = require('../models/User');

module.exports = {
    index: async (req, res, next) => {
        const reviews = await Review.find({});
        res.status(200).json(reviews)
    },
    
    newReview:async (req, res, next) => {
        const user = await User.findById(req.body.user);
        const newReview = req.body;
        delete newReview.user;

        const review = new Review(newReview);
        review.user = user;

        await review.save();

        user.reviews.push(review);
        await user.save();

        res.status(200).json(review);
    },

    deleteReview: async (req, res, next) => {
        res.status(200).json({ success: true })
    },
}