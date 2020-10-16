export const GET_REVIEWS = 'GET_REVIEWS';
export const SAVE_REVIEWS = 'SAVE_REVIEWS';

export const getReviews = (gameId) => ({
  type: GET_REVIEWS,
  gameId,
});

export const saveReviews = (reviews) => ({
  type: SAVE_REVIEWS,
  reviews,
});