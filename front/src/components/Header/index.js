import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  Form,
  FormControl,
  Button,
  Navbar,
} from 'react-bootstrap';
import Register from '../Register';
import Login from '../Login';

import './styles.scss';

const Header = () => (
  <div className="header">
    <nav className="nav">
      <div>
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
      </div>
      <div className="header__wrap--right">
        <Navbar bg="dark" variant="dark" className="navbar__search">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <NavLink
          to="/profile"
          className="menu__item"
          activeClassName="menu__link--active"
          exact
        >
          Profile
        </NavLink>
        <Register />
        <Login />
      </div>
    </nav>
  </div>
);

export default Header;
