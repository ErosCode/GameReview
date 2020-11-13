export const GET_USER_ROLE = 'GET_USER_ROLE';
export const GET_USER_ITEM = 'GET_USER_ITEM';

export const getUserRole = (userRole) => ({
  type: GET_USER_ROLE,
  userRole,
});

export const getUserItem = (userItem) => ({
  type: GET_USER_ITEM,
  userItem,
});
