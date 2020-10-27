import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../../UserContext.js';
import Login from '../../containers/Login';
import Register from '../Register';
import Header from '../../containers/Header';
import Home from '../../containers/Home';
import Games from '../../containers/Games';
import GameDetails from '../../containers/GameDetails';
import Footer from '../Footer';
import AdminGames from '../../containers/AdminGames';
import './App.scss';
import Axios from 'axios';

const App = ({ getGames, getUserRole, userRole }) => {
  const [ userData, setUserData ] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    getGames();
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
        console.log('token res',tokenRes.data);
        setUserData({
          token,
          user: userRes.data,
        });
        getUserRole(userRes.data.role);
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
        <Route
          path="/adminside/admin/admingames"
          exact
          >
            <AdminGames />
        </Route>
      </div>
      <Footer />
    </div>
    </UserContext.Provider>
  );
};

App.propTypes = {
  getGames: PropTypes.func.isRequired,
  getUserRole: PropTypes.func.isRequired,
  userRole:PropTypes.string.isRequired,
};

export default App;
