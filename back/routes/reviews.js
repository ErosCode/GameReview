const router = require('express').Router();

const ReviewController = require('../controllers/reviews');

router.route('/')
    .get(ReviewController.index)
    .post(ReviewController.newReview)
    .delete(ReviewController.deleteReview);

module.exports = router;