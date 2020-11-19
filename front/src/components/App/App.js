import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../../UserContext.js';
import Login from '../../containers/Login';
import Register from '../Register';
import Header from '../../containers/Header';
import Home from '../../containers/Home';
import Profile from '../../containers/Profile';
import Games from '../../containers/Games';
import GamesFiltered from '../../containers/GamesFiltered';
import GameDetails from '../../containers/GameDetails';
import Footer from '../Footer';
import Admin from '../../containers/Admin';
import AdminGames from '../../containers/AdminGames';
import AdminUsers from '../../containers/AdminUsers';
import './App.scss';
import Axios from '../../axios';

const App = ({ getGames, getUserRole, userRole, getUserItem, getTags }) => {
  const [ userData, setUserData ] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    getGames();
    getTags();
    const checkLoggedIn = async () => {
      let token = localStorage.getItem('auth-token');
      if (token === null) {
        localStorage.setItem('auth-token', '');
        token = '';
      }
      const tokenRes = await Axios.post('/user/tokenIsValid', null,
      {
        headers: { 'x-auth-token': token }
      });
      if (tokenRes.data) {
        const userRes = await Axios.get('/user/',
        {
          headers: { 'x-auth-token': token },
        });
        console.log('token res',tokenRes.data);
        setUserData({
          token,
          user: userRes.data,
        });
        getUserRole(userRes.data.role);
        getUserItem(userRes.data);
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
          path="/tags/:slug"
          exact
          component={({ match }) => (
            <GamesFiltered params={match.params.slug} slug={ match.params.slug } />
          )} 
        />
        <Route
          path="/games/:slug"
          exact
          component={({ match }) => (
            <GameDetails slug={ match.params.slug } />
          )} 
        />
        <Route
          path="/profile/:slug"
          exact
          component={({ match }) => (
            <Profile
              slug={ match.params.slug } />
          )} 
        />
        <Route
          path="/adminside/admin"
          exact
          >
            <Admin />
        </Route>
        <Route
          path="/adminside/admin/admingames"
          exact
          > 
            <Admin />
            <AdminGames />
        </Route>
        <Route
          path="/adminside/admin/adminusers"
          exact
          > 
            <Admin />
            <AdminUsers />
        </Route>
        
      </div>
      <Footer />
    </div>
    </UserContext.Provider>
  );
};

App.propTypes = {
  getGames: PropTypes.func.isRequired,
  getTags: PropTypes.func.isRequired,
  getUserRole: PropTypes.func.isRequired,
  userRole:PropTypes.string.isRequired,
  getUserItem: PropTypes.func.isRequired,
};

App.defaultProps = {
  userRole: 'visitor',
}

export default App;
