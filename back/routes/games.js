const router = require('express').Router();

const GameController = require('../controllers/games');
const ReviewController = require('../controllers/reviews');

router.route('/')
    .get(GameController.index)
    .post(GameController.newGame)

router.route('/:gameId')
    .get(GameController.getGame)
    .post(ReviewController.newReview)
    .put(GameController.replaceGame)
    .delete(GameController.deleteGame);

module.exports = router;