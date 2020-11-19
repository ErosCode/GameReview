import {
    SAVE_GAMES,
    SAVE_TAGS,
  } from '../actions/games';
import {
  SAVE_REVIEWS,
} from '../actions/reviews';

  const initialState = {
    games: [],
    reviews: [],
    gameId: '',
    tags: [],
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
        gameId: action.gameId,
        };
      case SAVE_TAGS:
        return {
          ...state,
          tags: action.tags,
        };
      default:
        return state;
    }
  };
  
  export default games;