const Game = require('../models/Game');
const User = require('../models/User');
const Review = require('../models/Review');
const { addGameValidation } = require('../validation');


module.exports= {
    index: async (req, res, next) => {
        try {
            const games = await Game.find({}).populate('reviews');
        res.status(200).json(games);
        }
        catch(err) {
            res.status(400).json(err);
            next();
        }
        
    },

    getGame: async (req, res, next) => {
        try {
            const game = await Game.findById(req.params.gameId).populate({
            path : 'reviews', options: { sort: {'likes': -1}},
            populate : {
              path : 'user'
            }});
        res.status(200).json(game);
        next();
        }
        catch(err) {
            res.status(404).json('failed to fetch game');
            next();
        }
    },

    newGame: async (req, res, next) => {
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
        try {
            const newGame = new Game(req.body);
            console.log(newGame)
            const game = await newGame.save();

            res.status(200).json(game);
            next();
        } catch(err) {
            next();
        }
    },
    
    replaceGame: async (req, res, next) => {
        const { gameId } = req.params;
        const newGame = req.body;
        const result = await Game.findByIdAndUpdate(gameId, newGame, {new: true});
        res.status(200).json({ success: true});
    },

    updateGame: async (req, res, next) => {
        const { gameId } = req.params;
        const newGame = req.body;
        const newTag = req.body.tags;
        if(req.body.tags)
        {
            Game.update({ _id: gameId }, { $push: { tags: newTag } })
        }
            const result = await Game.findByIdAndUpdate(gameId, newGame, {new: true});
        res.status(200).json({ success: true});
    },

    deleteGame: async (req, res, next) => {
        const { gameId } = req.params;
        await Game.findById(gameId, async function(err, Game) {
            try {
                await Game.remove();
                res.status(200).send("Game: "+ gameId +" was deleted");
                next();
            } catch(err) {
                res.status(500).send("There was a problem deleting the game");
                next();
            }
        });
    },

    searchGames: async (req, res, next) => {
        query = req.params.query
            try{
                
                const gamesSearch = await Game.find({
                   name: {
                    $regex: new RegExp(query, "i")
                    }
                })
                res.status(200).json(gamesSearch);
            } catch (err) {
                console.log(err.response);
                res.status(400).json('Error on fetching serch data');
            };
    },

    getLastGames: async (req, res, next) => {
        try{
            const lastGames = await Game.find().sort({date: -1}).limit(5)
            res.status(200).json(lastGames);
            next();
        } catch(err) {
            console.log(err.response);
            res.status(400).json(err.response);
            next();
        }
    },


}