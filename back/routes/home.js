const router = require('express').Router();

const GameController = require('../controllers/games');
const ReviewController = require('../controllers/reviews');

router.route('/lastgames')
    .get(GameController.getLastGames)

router.route('/lastreviews')
    .get(ReviewController.getLastReviews)

module.exports = router;