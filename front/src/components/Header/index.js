import React, { useContext } from 'react';
import UserContext from '../../UserContext';
import { NavLink } from 'react-router-dom';

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
        <div className="header__wrap--left">
          <NavLink
            to="/"
            className="menu__item header__link"
            activeClassName="menu__link--active"
            exact
          >
            Home
          </NavLink>
          <NavLink
            to="/games"
            className="menu__item header__link"
            activeClassName="menu__link--active"
            exact
          >
            Games
          </NavLink>
        </div>
        <div className="header__wrap--right">
            <form className="header__search__form">
              <input type="search" placeholder="Search" />
            </form>
          {userData.user ? (
            <>
            <NavLink
              to="/profile"
              className="menu__item header__link"
              activeClassName="menu__link--active"
              exact
            >
              Profile
            </NavLink>
            <button className="header__logout--button" onClick={logout}>Log out</button>
            </>
          ): (
            <>
            <NavLink
              to="/register"
              className="menu__item header__link"
              activeClassName="menu__link--active"
              exact
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              className="menu__item header__link"
              activeClassName="menu__link--active"
              exact
            >
              Login
            </NavLink>
            </>
          )}
          
        </div>
      </nav>
      <nav className="nav--smallScreen">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
          <NavLink
            to="/"
            className="menu__item header__link"
            activeClassName="menu__link--active"
            exact
          >
            Home
          </NavLink>
          <NavLink
            to="/games"
            className="menu__item header__link"
            activeClassName="menu__link--active"
            exact
          >
            Games
          </NavLink>
          </ul>
        </div>
        <div className="nav--smallScreen__right">
        <form className="header__search__form">
              <input type="search" placeholder="Search" />
            </form>
          {userData.user ? (
            <>
            <NavLink
              to="/profile"
              className="menu__item header__link"
              activeClassName="menu__link--active"
              exact
            >
              Profile
            </NavLink>
            <button className="header__logout--button" onClick={logout}>Log out</button>
            </>
          ): (
            <>
            <NavLink
              to="/register"
              className="menu__item header__link"
              activeClassName="menu__link--active"
              exact
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              className="menu__item header__link"
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
