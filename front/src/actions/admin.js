export const DELETE_GAME = 'DELETE_GAME';
export const GET_USERS = 'GET_USERS';
export const SAVE_USERS = 'SAVE_USERS';
export const USER_DELETE ='USER_DELETE';
export const DELETE_REVIEW = 'DELETE_REVIEW';

export const deleteGame = (itemId) => ({
  type: DELETE_GAME,
  itemId,
});

export const deleteReview = (itemId) => ({
  type: DELETE_REVIEW,
  itemId,
});

export const userDelete = (userId) => ({
  type: USER_DELETE,
  userId,
});

export const getUsers = () => ({
  type: GET_USERS,
});

export const saveUsers = (users) => ({
  type: SAVE_USERS,
  users,
});