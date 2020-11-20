import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

import './styles.scss';

const Aside = ({tags}) => {
    return (
        <div className="aside">
            <div className="aside__context">Choose a filter Tag</div>
            {tags.map(({name}) => (
                <NavLink
                key={name}
                to={`/tags/${name}`}
                className="menu__item header__link aside__link"
                activeClassName="menu__link--active"
                exact
              >
                {name}
              </NavLink>
            ))}
        </div>
      );
}


export default Aside;
