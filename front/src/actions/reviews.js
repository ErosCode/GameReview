export const GET_REVIEWS = 'GET_REVIEWS';
export const SAVE_REVIEWS = 'SAVE_REVIEWS';
export const HANDLE_REVIEW_FORM = 'HANDLE_REVIEW_FORM';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const ADD_LIKE= 'ADD_LIKE';

export const getReviews = (gameId) => ({
  type: GET_REVIEWS,
  gameId,
});

export const saveReviews = (reviews) => ({
  type: SAVE_REVIEWS,
  reviews,
});

export const handleReviewForm = () => ({
  type: HANDLE_REVIEW_FORM,
})

export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  name,
  value,
});

export const addLike = (reviewId, reviewLikes) => ({
  type: ADD_LIKE,
  reviewId,
  reviewLikes,
})