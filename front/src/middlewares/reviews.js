import Axios from 'axios';
import { GET_REVIEWS, saveReviews } from '../actions/reviews';

const games = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_REVIEWS: {
        const gameId = action.gameId;
      Axios.get(`http://localhost:3002/api/games/${gameId}`)
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveReviews(response.data.reviews));
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