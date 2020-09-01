const router = require('express').Router();

const ReviewController = require('../controllers/reviews');

router.route('/')
    .get(ReviewController.index)
    .post(ReviewController.newReview)
    .delete(ReviewController.deleteReview);

router.route('/:reviewId')
    .get(ReviewController.getReview)
    .put(ReviewController.replaceReview);
    
module.exports = router;