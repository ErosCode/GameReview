import axios from 'axios';
import { GET_USER } from '../actions/user';
const auth = () => {
    switch(action.type) {
      case GET_USER: 
      axios.get('XXXXXX/api/islogged',
        {
          headers: {
            'X-AUTH-TOKEN': Coockies.get('auth-token'),
          },
        })
    }
}
export default auth;