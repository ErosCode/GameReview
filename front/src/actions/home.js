export const GET_LAST_GAMES = 'GET_LAST_GAMES';
export const SAVE_LAST_GAMES = 'SAVE_LAST_GAMES';
export const GET_LAST_REVIEWS = 'GET_LAST_REVIEWS';
export const SAVE_LAST_REVIEWS = 'SAVE_LAST_REVIEWS';

export const getLastGames = () => ({
  type: GET_LAST_GAMES,
});

export const saveLastGames = (lastGames) => ({
  type: SAVE_LAST_GAMES,
  lastGames,
});

export const getLastReviews = () => ({
    type: GET_LAST_REVIEWS,
});

export const saveLastReviews = (lastReviews) => ({
    type: SAVE_LAST_REVIEWS,
    lastReviews,
});
