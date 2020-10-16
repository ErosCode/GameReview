import React from 'react';
import PropTypes from 'prop-types';
import ReviewForm from './ReviewForm';
import ReviewsPost from './ReviewsPost';

import './styles.scss';

const Reviews = ({ gameId, getReviews }) => {
  return (
    <div className="reviews">
      <ReviewsPost getReviews={getReviews} gameId={gameId}/>
      <ReviewForm gameId={gameId}/>
    </div>
  );
};
export default Reviews;
