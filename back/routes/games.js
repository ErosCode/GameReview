const router = require('express').Router();
const Game = require('../models/Game');
const { addGameValidation } = require('../validation');

module.exports = router.post('/games', async (req, res) => {

    // Validate the data before add a new game
    const {error} = addGameValidation(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }

    // Checking if game is already in the database
    const gameExist = await Game.findOne({
        name: req.body.name
    });
    if(gameExist) {
        return res.status(400).send('This game already exists');
    };

    // Create a new Game
    const game = new Game({
        name: req.body.name,
        description: req.body.description
    });
    try{
        const savedGame = await game.save();
        res.send({ game: game._id});
    }catch(err){
        res.status(400).send(err);
    }
});
