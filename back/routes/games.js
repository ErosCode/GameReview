const router = require('express').Router();

const GameController = require('../controllers/games');

router.route('/')
    .get(GameController.index)
    .post(GameController.newGame)

router.route('/:gameId')
    .get(GameController.getGame)
    .put(GameController.replaceGame)
    .delete(GameController.deleteGame);
    
module.exports = router;