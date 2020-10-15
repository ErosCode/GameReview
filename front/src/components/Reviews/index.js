import React from 'react';
import PropTypes from 'prop-types';
import ReviewForm from './ReviewForm';
import ReviewsPost from './ReviewsPost';

import './styles.scss';

const Reviews = () => (
  <div className="reviews">
    <ReviewsPost />
    <ReviewsPost />
    <ReviewsPost />
    <ReviewsPost />
    <ReviewForm />
  </div>
);

export default Reviews;
