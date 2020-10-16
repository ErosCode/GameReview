import React from 'react';
import PropTypes from 'prop-types';
import ReviewForm from './ReviewForm';
import ReviewsPost from './ReviewsPost';

import './styles.scss';

const Reviews = ({ gameId, getReviews, reviews }) => {
  return (
    <div className="reviews">
      <ReviewsPost reviews={reviews} getReviews={getReviews} gameId={gameId}/>
      <ReviewForm gameId={gameId}/>
    </div>
  );
};
export default Reviews;
