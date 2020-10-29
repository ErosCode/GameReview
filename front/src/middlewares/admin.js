import Axios from 'axios';
import { GET_USERS, saveUsers } from '../actions/admin';

const admin = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USERS: {
      Axios.get('http://localhost:3002/api/users')
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveUsers(response.data));
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