const router = require('express').Router();

const UsersController = require ('../controllers/users');
const User = require('../models/User');

router.route('/')
    .get(UsersController.index);


router.route('/:userId')
    .get(UsersController.getUser)
    .put(UsersController.replaceUser)
    .patch(UsersController.updateUser)
    .delete(UsersController.deleteUser);


router.route('/:userId/reviews')
    .get(UsersController.getUserReviews)
    .post(UsersController.newUserReview)
module.exports = router;