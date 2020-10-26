import Axios from 'axios';
import { GET_LAST_GAMES,
  saveLastGames,
  GET_LAST_REVIEWS,
  saveLastReviews,
} from '../actions/home';

const games = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_LAST_GAMES: {
      Axios.get('http://localhost:3002/api/home/lastgames')
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveLastGames(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case GET_LAST_REVIEWS: {
      Axios.get('http://localhost:3002/api/home/lastreviews')
        .then((response) => {
          console.log('lastreview', response.data);
          store.dispatch(saveLastReviews(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default games;