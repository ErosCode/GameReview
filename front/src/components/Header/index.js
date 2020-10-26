import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from '../../UserContext';
import { NavLink, Link } from 'react-router-dom';
import { getSlugFromTitle } from '../../selectors';

import './styles.scss';

const Header = ({ games }) => {
  const { userData, setUserData } = useContext(UserContext);
  const [ searchValue, setSearchValue ] = useState('');

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };
  
  const handleSearchChange = (evt) => {
    setSearchValue(evt.target.value);
  };

  const searchResults = !searchValue
    ? games
    : games.filter(({name}) =>
    getSlugFromTitle(name).includes(getSlugFromTitle(searchValue))
      );

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
        <div className="header__search__form">
          <input value={searchValue} onChange={handleSearchChange} name="search" type="search" placeholder="Search" />
            <ul> {searchValue.length>0 && (searchResults.map((item) => (
              
              <Link
                className="search__list"
                to={`/games/${getSlugFromTitle(item.name)}`}
                key={item.name}
              >
                {item.name}
              </Link>
            )))}</ul>
          </div>
          <div className="header__wrap--right">
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
            <NavLink 
              to="/"
              className="menu__item header__link menu__item--logout" 
              onClick={logout}
            >
              Logout
            </NavLink>
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
            <li style={{ color: 'white', paddingTop: '200px'}}>
              &copy; All rights reserved ErosCode
              </li>
          </ul>
        </div>
        <div className="header__search__form">
              <input className="header__search__input" value={searchValue} onChange={handleSearchChange} name="search" type="search" placeholder="Search" />
              <ul> {searchValue.length>0 && (searchResults.map((item) => (
              
              <Link
                className="search__list"
                to={`/games/${getSlugFromTitle(item.name)}`}
                key={item.name}
              >
                {item.name}
              </Link>
            )))}</ul>
            </div>
            <div className="nav--smallScreen__right">
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
            <NavLink 
              to="/"
              className="menu__item header__link menu__item--logout" 
              onClick={logout}
            >
              Logout
            </NavLink>
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
Header.propTypes ={
  games: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default Header;
