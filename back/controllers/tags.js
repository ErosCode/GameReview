const Tag = require('../models/Tag');
const Game = require('../models/Game');

module.exports = {
    index: async (req, res, next) => {
        const tags = await Tag.find({});
        res.status(200).json(tags)
    },

    getTag: async (req, res, next) => {
        const tag = await Tag.findById(req.params.tagId).populate('games');
        res.status(200).json(tag);
    },
    
    newTag: async (req, res, next) => {
        const tagExist = await Tag.findOne({
            name: req.body.name
        });
        if(tagExist) {
            return res.status(400).send('This tag already exists');
        };
        try {
            const newTag = new Tag(req.body);
            console.log(newTag)
            const tag = await newTag.save();

            res.status(200).json(tag);
            next();
        } catch(err) {
            next();
        }
    },

    replaceTag: async (req, res, next) => {
        try {
        const { tagId } = req.params;
        const newTag = req.body;

        await Tag.findByIdAndUpdate(tagId, newTag, {new:true});
        res.status(200).json({ success: true })
        next();
        } catch(err) {
            res.status(400).json(err)
            next();
        }
    },

    updateTag: async (req, res, next) => {
        // req.body must contains any fields
        const { tagId } = req.params;
        const newTag = req.body;

        const result = await Tag.findByIdAndUpdate(tagId, newTag, {new:true});
        res.status(200).json({ success: true })
    },

    deleteTag: async (req, res, next) => {
        const { tagId } = req.params;
        await Tag.findById(tagId, async function(err, Tag) {
            try {
                await Tag.remove();
                res.status(200).send("Tag: "+ tagId +" was deleted");
                next();
            } catch(err) {
                res.status(500).send("There was a problem deleting the game");
                next();
            }
        });
    },
}