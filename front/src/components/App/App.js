import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import UserContext from '../../UserContext.js';

import logo from './logo.svg';
import Counter from '../../containers/Counter';
import Header from '../Header';
import Home from '../Home';
import Games from '../Games';
import GameDetails from '../GameDetails';
import Footer from '../Footer';
import './App.scss';
import Axios from 'axios';

const App = () => {
  const [ userData, setUserData ] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem('auth-token');
      if (token === null) {
        localStorage.setItem('auth-token', '');
        token = '';
      }
      const tokenRes = await Axios.post('http://localhost:3002/api/user/tokenIsValid', null,
      {
        headers: { 'x-auth-token': token }
      });
      if (tokenRes.data) {
        const userRes = await Axios.get('http://localhost:3002/api/user/',
        {
          headers: { 'x-auth-token': token },
        });
        console.log(tokenRes.data);
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }} >
    <div className="App">
      <div className="page-container">
        <Header />
        <Route
          path="/"
          exact
        >
          <Home />
        </Route>
        <Route
          path="/games"
          exact
        >
          <Games />
        </Route>
        <Route
          path="/games/game_details"
          exact
        >
          <GameDetails />
        </Route>
      </div>
      <Footer />

    </div>
    </UserContext.Provider>
  );
};

App.propTypes = {
  getUser: PropTypes.func.isRequired,
}
export default App;
