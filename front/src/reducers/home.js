import {
    SAVE_LAST_GAMES,
    SAVE_LAST_REVIEWS,
  } from '../actions/home';

  const initialState = {
    lastGames: [],
    lastReviews: [],
  };
  
  const home = (state = initialState, action = {}) => {
    switch (action.type) {
      case SAVE_LAST_GAMES:
        return {
          ...state,
          lastGames: action.lastGames,
        };
      case SAVE_LAST_REVIEWS:
        return {
        ...state,
        lastReviews: action.lastReviews,
        };
      default:
        return state;
    }
  };
  
  export default home;