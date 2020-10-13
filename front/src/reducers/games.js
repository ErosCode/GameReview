import {
    SAVE_GAMES
  } from '../actions/games';
  
  const initialState = {
    games: [],
  };
  
  const games = (state = initialState, action = {}) => {
    switch (action.type) {
      case SAVE_GAMES:
        return {
          ...state,
          games: action.games,
        };
      default:
        return state;
    }
  };
  
  export default games;