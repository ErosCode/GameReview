import React from 'react';
import ReviewForm from './ReviewForm';

import './styles.scss';

const Reviews = ({ gameId, handleReviewForm, reviews }) => {
  return (
    <div className="reviews">
      <ReviewForm handleReviewForm={handleReviewForm} gameId={gameId} reviews={reviews}/>
    </div>
  );
};
export default Reviews;
