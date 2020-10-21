import React from 'react';
import ReviewForm from './ReviewForm';

import './styles.scss';

const Reviews = ({ gameId, handleReviewForm }) => {
  return (
    <div className="reviews">
      <ReviewForm handleReviewForm={handleReviewForm} gameId={gameId} />
    </div>
  );
};
export default Reviews;
