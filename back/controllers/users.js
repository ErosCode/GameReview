const User = require('../models/User');
const Review = require('../models/Review');
const { validateParam } = require('../validation');

module.exports = {
    index: async (req, res, next) => {
        try {
            const users = await User.find({})
            res.status(200).json(users);
        } catch(err) {
            next(err);
        };
    },
    
    getUser: async (req, res, next) => {
        try {
            const user = await User.findById(req.params.userId);
            res.status(200).json(user);
            next();
        } catch(err) {
            res.status(400).json('failed to fetch user');
            next();
        }
    },

    replaceUser: async (req, res, next) => {
        //enforce that req.body must contains all the fields
        const { userId } = req.params;
        const newUser = req.body;

        const result = await User.findByIdAndUpdate(userId, newUser, {new:true});
        res.status(200).json({ success: true })
    },

    updateUser: async (req, res, next) => {
        // req.body must contains any fields
        try {
            const { userId } = req.params;
        const newUser = req.body;
        
        const result = await User.findByIdAndUpdate(userId, newUser, {new:true});
        res.status(200).json({ success: true })
        } catch(err) {
            res.status(400).json(err)
        }
        
    },

    deleteUser: async (req, res, next) => {
        const { userId } = req.params;
        await User.findById(userId, async function (err, User) {
            try {
                await User.remove();
                res.status(200).send("User: "+ userId +" was deleted.");
                next();
            } catch (err) {
                 res.status(500).send("There was a problem deleting the User.");
                 next(err);
            }
          });
    },

    getUserReviews : async (req, res, next) => {
        const { userId } = req.params;
        const user = await User.findById(userId).populate('reviews');
        res.status(200).json(user.reviews);
    },

    newUserReview: async (req, res, next) => {
        const { userId } = req.params;
        // Create a new review
        const newReview = new Review(req.body);
        console.log('new review', newReview);
        // Get user
        const user = await User.findById(userId);
        // Assign user to a review
        newReview.user = user;
        // Save the review
        await newReview.save();
        // Add a review to the user's reviews
        user.reviews.push(newReview);
        user.save();
        res.status(201).json(newReview);
    }
};