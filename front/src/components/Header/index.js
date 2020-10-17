import React, { useContext } from 'react';
import UserContext from '../../UserContext';
import { NavLink } from 'react-router-dom';
import {
  Form,
  FormControl,
  Button,
  Navbar,
} from 'react-bootstrap';

import './styles.scss';

const Header = () => {
  const { userData, setUserData } = useContext(UserContext);
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
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
          {userData.user ? (
            <>
            <NavLink
              to="/profile"
              className="menu__item"
              activeClassName="menu__link--active"
              exact
            >
              Profile
            </NavLink>
            <button onClick={logout}>Log out</button>
            </>
          ): (
            <>
            <NavLink
              to="/register"
              className="menu__item"
              activeClassName="menu__link--active"
              exact
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              className="menu__item"
              activeClassName="menu__link--active"
              exact
            >
              Login
            </NavLink>
            </>
          )}
          
        </div>
      </nav>
    </div>
  );
};

export default Header;
