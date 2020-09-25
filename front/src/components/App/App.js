import React from 'react';
import { Route } from 'react-router-dom';

import logo from './logo.svg';
import Counter from '../../containers/Counter';
import Header from '../Header';
import Home from '../Home';
import Games from '../Games';
import Footer from '../Footer';
import './App.scss';

const App = () => (
  <div className="App">
    <div className="page-container">
      {/* <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Counter />
      <p>
        Edit <code>src/component/App/App.js</code> and save to reload.
      </p>
      <span>
        <span>Learn </span>
        <a
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <span>, </span>
        <a
          className="App-link"
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux
        </a>
        <span>, </span>
        <a
          className="App-link"
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux Toolkit
        </a>
        ,<span> and </span>
        <a
          className="App-link"
          href="https://react-redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Redux
        </a>
      </span>
</header> */}
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
    </div>
    <Footer />

  </div>
);

export default App;
