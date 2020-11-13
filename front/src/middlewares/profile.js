import Axios from '../axios';
import { GET_USER_BY_ID, saveUserItem } from '../actions/profile';

const profile = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER_BY_ID: {
      const userId = action.userId;
      Axios.get(`/users/`+ userId)
      .then((response) => {
        console.log('useritem',response.data);
        store.dispatch(saveUserItem(response.data));
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

export default profile;