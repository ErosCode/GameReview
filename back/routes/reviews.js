const router = require('express').Router();

const ReviewController = require('../controllers/reviews');

router.route('/')
    .get(ReviewController.index)
    .post(ReviewController.newReview)
    

router.route('/:reviewId')
    .get(ReviewController.getReview)
    .put(ReviewController.replaceReview)
    .delete(ReviewController.deleteReview);
    
module.exports = router;