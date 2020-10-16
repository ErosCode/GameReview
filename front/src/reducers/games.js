import {
    SAVE_GAMES
  } from '../actions/games';
import {
  SAVE_REVIEWS
} from '../actions/reviews';

  const initialState = {
    games: [],
    reviews: [],
  };
  
  const games = (state = initialState, action = {}) => {
    switch (action.type) {
      case SAVE_GAMES:
        return {
          ...state,
          games: action.games,
        };
      case SAVE_REVIEWS:
        return {
        ...state,
        reviews: action.reviews,
        }
      default:
        return state;
    }
  };
  
  export default games;