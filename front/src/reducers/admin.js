import {
    SAVE_USERS
  } from '../actions/admin';

  const initialState = {
    users: [],
  };
  
  const admin = (state = initialState, action = {}) => {
    switch (action.type) {
      case SAVE_USERS:
        return {
          ...state,
          users: action.users,
        };
      default:
        return admin;
    }
  };
  
  export default admin;