const router = require('express').Router();

const TagController = require('../controllers/tags');

router.route('/')
    .get(TagController.index)
    .post(TagController.newTag)
    

router.route('/:tagId')
    .get(TagController.getTag)
    .put(TagController.replaceTag)
    .delete(TagController.deleteTag);
    
module.exports = router;