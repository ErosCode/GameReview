import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const ReviewsPost = ({ getReviews, gameId, reviews, gameRating }) => {
  useEffect(() => {
    getReviews(gameId);
  }, [gameId]);

const truncateString = (str, num) => {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, 10)
};
const scores = reviews.map((review)=>review.review_rate);
const average = scores.reduce((totalRates, score) => totalRates + score, 0);
const averageTotal = average / reviews.length;

  return (
    <div className="reviews__post">
      {reviews.length === 0 && (
        <div>
          THERE IS NO REVIEWS FOR THIS GAME YET
        </div>
      )}
      {reviews.map(( review ) => (
      <div key={review._id} className="post">
      <div className="post__top">
          <div className="post__top__left">
              <div className="post__top__left__info">
                  <Avatar src="" className="post__avatar" />
                  <h3>{review.user.name}</h3>
              </div>
              <p>{truncateString(review.date)}</p>
          </div>
        <div className="post__top__right">
          <div className="post__option">
          <p>Rating : {review.review_rate}</p>
          {console.log("REVIEWSRATEEEE", reviews.map((review)=>review.review_rate)), console.log("average", average / reviews.length)}
          {average / reviews.length}
          </div>
          <div className="post__option">
            <ThumbUpIcon />
            <p>Like : 5555</p>
          </div>
        </div>
      </div>
      <div className="post__bottom">
        <div className="post__rates">
          <div className="post__rate">
            <span>Graphics</span>
              {review.review_graphics}/10
          </div>
          <div className="post__rate">
            <span>Story</span>
            
              {review.review_story}/10
          </div>
          <div className="post__rate">
            <span>Writing</span>
            
              {review.review_writing}/10
          </div>
          <div className="post__rate">
            <span>Animation</span>
            
              {review.review_animation}/10
          </div>
        </div>
        <div className="post__text">
        {review.review_text}
        </div>
      </div>
    </div>
  ))}
  </div>
  );
};

ReviewsPost.propTypes = {
  getReviews: PropTypes.func,
  reviews: PropTypes.array,
};

export default ReviewsPost;
