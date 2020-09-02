const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./User');

const reviewSchema = new Schema({
    /*username: {
        type: String,
        require: true,
        max: 255,
        min: 6
    },*/
    review_text: {
        type: String,
        require: true,
        max: 3200,
        min: 20
        },
    review_graphics: {
            type: Number,
            require: true,
            max: 20,
            min: 0
    },
    review_story: {
            type: Number,
            require: true,
            max: 20,
            min: 0
    },
    review_animation: {
            type: Number,
            require: true,
            max: 20,
            min: 0
    },
    review_writing: {
        type: Number,
        require: true,
        max: 20,
        min: 0
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    createdAt: Date
  });

  /*reviewSchema.pre('remove', async function(next) {
    try {
        const { reviewId } = req.params;
        const userId = req.body.user;
        await User.update(
            {'_id': userId}, 
            { $pull: { "reviews" : { id: reviewId } } },
            {new:true}
        );
        next;
    } catch(err) {     
        next(err);
    }
});*/

 const Review = mongoose.model('Review', reviewSchema);
 module.exports = Review;