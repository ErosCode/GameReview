// With combineReducers you can use multiple reducers
import { combineReducers } from 'redux';
import counter from './counter' ;
import games from './games';
import home from './home';
import app from './app';
import admin from './admin';

export default combineReducers({
    // Call your reducers
    counter,
    games,
    home,
    app,
    admin,
});
