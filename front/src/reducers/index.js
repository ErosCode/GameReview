// With combineReducers you can use multiple reducers
import { combineReducers } from 'redux';
import counter from './counter' ;
import games from './games';

export default combineReducers({
    // Call your reducers
    counter,
    games,
});
