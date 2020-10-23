const Review = require('../models/Review');
const User = require('../models/User');
const Game = require('../models/Game');

module.exports = {
    index: async (req, res, next) => {
        const reviews = await Review.find({});
        res.status(200).json(reviews)
    },

    getReview: async (req, res, next) => {
        const review = await Review.findById(req.params.reviewId).populate('user');
        res.status(200).json(review);
    },
    
    newReview: async (req, res, next) => {
        try {
            const user = await User.findById(req.body.user);
            const game = await Game.findById(req.body.game);
            const newReview = req.body;
            delete newReview.user;
            delete newReview.game;

            const review = new Review(newReview);
            review.user = user;
            review.game = game;

            await review.save();

            user.reviews.push(review);
            game.reviews.push(review);
            await user.save();
            await game.save();

            res.status(200).json(review);
            next();
        } catch(err) {
            next(err);
        }
    },

    replaceReview: async (req, res, next) => {
        try {
        const { reviewId } = req.params;
        const newReview = req.body;

        await Review.findByIdAndUpdate(reviewId, newReview, {new:true});
        res.status(200).json({ success: true })
        next();
        } catch(err) {
            res.status(400).json(err)
            next();
        }
    },

    updateReview: async (req, res, next) => {
        // req.body must contains any fields
        const { reviewId } = req.params;
        const newReview = req.body;

        const result = await Review.findByIdAndUpdate(userId, newReview, {new:true});
        res.status(200).json({ success: true })
    },

    deleteReview: async (req, res, next) => {
        const { reviewId } = req.params;
        const userId = req.body.user;
        await Review.findById(reviewId, async function (err, Review) {
            try {
                await Review.remove();
                await User.update(
                    {'_id': userId}, 
                    { $pull: { "reviews" :  reviewId } },
                    {new:true}
                );
                res.status(200).send("Review: "+ reviewId +" was deleted.");
                next();
            } catch (err) {
                res.status(500).send("There was a problem deleting the review.");
                 next(err);
            }
          });
    },


}