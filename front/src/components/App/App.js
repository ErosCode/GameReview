import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import logo from './logo.svg';
import Counter from '../../containers/Counter';
import Header from '../Header';
import Home from '../Home';
import Games from '../Games';
import GameDetails from '../GameDetails';
import Footer from '../Footer';
import './App.scss';

const App = ({getUser}) => {
  useEffect(() => {
    getUser();
  }, []);

  return (
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
  );
};

App.propTypes = {
  getUser: PropTypes.func.isRequired,
}
export default App;
