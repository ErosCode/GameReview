export const DELETE_GAME = 'DELETE_GAME';
export const GET_USERS = 'GET_USERS';
export const SAVE_USERS = 'SAVE_USERS';

export const deleteGame = (itemId) => ({
  type: DELETE_GAME,
  itemId,
});

export const getUsers = () => ({
  type: GET_USERS,
});

export const saveUsers = (users) => ({
  type: SAVE_USERS,
  users,
});