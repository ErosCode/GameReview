import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Header = () => (
  <div className="header">
    <nav className="nav">
      <NavLink
        to="/"
        className="menu__item"
        activeClassName="menu__link--active"
        exact
      >
        Home
      </NavLink>
      <NavLink
        to="/games"
        className="menu__item"
        activeClassName="menu__link--active"
        exact
      >
          Games
      </NavLink>
    </nav>
  </div>
);

export default Header;
