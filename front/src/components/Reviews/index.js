import React from 'react';
import ReviewForm from './ReviewForm';
import ReviewsPost from './ReviewsPost';

import './styles.scss';

const Reviews = ({ gameId, getReviews, reviews, handleReviewForm }) => {
  return (
    <div className="reviews">
      <ReviewsPost reviews={reviews} getReviews={getReviews} gameId={gameId}/>
      <ReviewForm handleReviewForm={handleReviewForm} gameId={gameId}/>
    </div>
  );
};
export default Reviews;
