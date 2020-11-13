export const GET_USER_BY_ID = 'GET_USER_BY_ID';
export const SAVE_USER_ITEM = 'SAVE_USER_ITEM';

export const getUserById = (userId) => ({
  type: GET_USER_BY_ID,
  userId,
});

export const saveUserItem = () => ({
  type: SAVE_USER_ITEM,
})