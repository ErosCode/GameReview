import React, { useContext, useState } from 'react';
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
        <div className="header__wrap--right">
            <div className="header__search__form">
              <input value={searchValue} onChange={handleSearchChange} name="search" type="search" placeholder="Search" />
                  {searchValue.length>0 && (searchResults.map((item) => (
                      <Link
                        to={`/games/${getSlugFromTitle(item.name)}`}
                        key={item.name}
                      >
                      {item.name}
                      </Link>
                  )))}
            </div>
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
            <li style={{ color: 'white', paddingTop: '200px'}}>
              &copy; All rights reserved ErosCode
              </li>
          </ul>
          
        </div>
        <div className="nav--smallScreen__right">
        <div className="header__search__form">
              <input value={searchValue} onChange={handleSearchChange} name="search" type="search" placeholder="Search" />
              {searchValue.length>0 && (searchResults.map((item) => (
                      <Link
                        to={`/games/${getSlugFromTitle(item.name)}`}
                        key={item.name}
                      >
                      {item.name}
                      </Link>
                  )))}
            </div>
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
