const Review = require('../models/Review');
const User = require('../models/User');

module.exports = {
    index: async (req, res, next) => {
        const reviews = await Review.find({});
        res.status(200).json(reviews)
    },

    getReview: async (req, res, next) => {
        const review = await Review.findById(req.params.reviewId);

        res.status(200).json(review);
    },
    
    newReview: async (req, res, next) => {
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

    replaceReview: async (req, res, next) => {
        const { reviewId } = req.params;
        const newReview = req.body;

        const result = await Review.findByIdAndUpdate(reviewId, newReview, {new:true});
        res.status(200).json({ success: true })
    },

    updateReview: async (req, res, next) => {
        // req.body must contains any fields
        const { reviewId } = req.params;
        const newReview = req.body;

        const result = await Review.findByIdAndUpdate(userId, newReview, {new:true});
        res.status(200).json({ success: true })
    },

    deleteReview: async (req, res) => {
        const { reviewId } = req.params;
        await Review.findByIdAndRemove(reviewId, function (err, Review) {
            if (err) return res.status(500).send("There was a problem deleting the Review.");
            res.status(200).send("Review: "+ reviewId +" was deleted.");
          });
    },


}