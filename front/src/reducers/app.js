import {
    GET_USER_ROLE,
    GET_USER_ITEM,
  } from '../actions/app';

  import { SAVE_USER_ITEM } from '../actions/profile';

  const initialState = {
    userRole: '',
    userItem: [],
  };
  
  const app = (state = initialState, action = {}) => {
    switch (action.type) {
      case GET_USER_ROLE:
        return {
          ...state,
          userRole: action.userRole,
        };
        case GET_USER_ITEM:
          return {
            ...state,
            userItem: action.userItem,
          };
        case SAVE_USER_ITEM:
          return {
            ...state,
            userItem: action.userItem,
          };
      default:
        return state;
    }
  };
  
  export default app;