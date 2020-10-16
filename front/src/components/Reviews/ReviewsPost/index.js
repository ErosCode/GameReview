import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Axios from 'axios';

const ReviewsPost = ({ getReviews, gameId, reviews}) => {
  useEffect(() => {
    getReviews(gameId);
  }, []);

  return (
    <div className="reviews__post">
      {reviews.map(( review ) => (
      <div key={review._id} className="post">
      <div className="post__top">
          <div className="post__top__left">
              <div className="post__top__left__info">
                  <Avatar src="" className="post__avatar" />
                  <h3>{review.user.name}</h3>
              </div>
              <p>{review.date}</p>
          </div>
        <div className="post__top__right">
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
        <p className="post__text">
        {review.review_text}
        </p>
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
