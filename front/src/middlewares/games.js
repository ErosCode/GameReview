import Axios from '../axios';
import { GET_GAMES, saveGames, GET_TAGS, saveTags } from '../actions/games';

const games = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_GAMES: {
      Axios.get('/games/')
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
    case GET_TAGS: {
      Axios.get('/tags/')
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveTags(response.data));
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