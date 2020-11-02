import Axios from '../axios';
import { GET_USERS, saveUsers, DELETE_REVIEW } from '../actions/admin';

const admin = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USERS: {
      Axios.get('/users')
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
    case DELETE_REVIEW: {
      const reviewId = action.itemId;
      Axios.delete(`/reviews/`+ reviewId)
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