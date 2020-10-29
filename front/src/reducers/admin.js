import {
    SAVE_USERS
  } from '../actions/admin';

  const initialState = {
    users: [],
  };
  
  const app = (state = initialState, action = {}) => {
    switch (action.type) {
      case SAVE_USERS:
        return {
          ...state,
          users: action.users,
        };
      default:
        return state;
    }
  };
  
  export default app;