export const GET_USER_ROLE = 'GET_USER_ROLE';

export const getUserRole = (userRole) => ({
  type: GET_USER_ROLE,
  userRole,
});