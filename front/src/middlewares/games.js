import Axios from 'axios';
import { GET_GAMES, saveGames } from '../actions/games';

const games = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_GAMES: {
      Axios.get('http://localhost:3002/api/games/')
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveGames(response.data));
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