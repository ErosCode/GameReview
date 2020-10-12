import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import UserContext from '../../UserContext.js';
import Login from '../Login';
import Register from '../Register';
import Header from '../Header';
import Home from '../Home';
import Games from '../../containers/Games';
import GameDetails from '../../containers/GameDetails';
import Footer from '../Footer';
import './App.scss';
import Axios from 'axios';

const App = ({ getGames }) => {
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

  useEffect(() => {
    getGames();
  }, [])

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
          path="/register"
          exact
        >
          <Register />
        </Route>
        <Route
          path="/login"
          exact
        >
          <Login />
        </Route>
        <Route
          path="/games"
          exact
        >
          <Games />
        </Route>
        <Route
          path="/games/:slug"
          exact
          component={({ match }) => (
            <GameDetails slug={ match.params.slug } />
          )} 
        />
        
      </div>
      <Footer />

    </div>
    </UserContext.Provider>
  );
};

App.propTypes = {
  getGames: PropTypes.func.isRequired,
};

export default App;
