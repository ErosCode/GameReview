import Axios from 'axios';
import { GET_LAST_GAMES, saveLastGames } from '../actions/home';

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
    default:
      next(action);
  }
};

export default games;