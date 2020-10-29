import Axios from 'axios';
import { DELETE_GAME } from '../actions/admin';

const admin = (store) => (next) => (action) => {
  switch (action.type) {
    case DELETE_GAME: {
        const itemId = action.itemId;
      Axios.delete('http://localhost:3002/api/users')
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response);
        });

      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default admin;