import {
    GET_USER_ROLE
  } from '../actions/app';

  const initialState = {
    userRole: '',
  };
  
  const app = (state = initialState, action = {}) => {
    switch (action.type) {
      case GET_USER_ROLE:
        return {
          ...state,
          userRole: action.userRole,
        };
      default:
        return state;
    }
  };
  
  export default app;