import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AdminGames from '../AdminGames';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Admin = ({ userRole, getUserRole, getUsers }) => {
    useEffect(() => {
        getUserRole(userRole)
        getUsers();
    }, [userRole])
    
    return (
        <div className="admin">
            <div>
                Welcome to the Admin dashboard
            </div>
            <div>
                Choose something to Edit
            </div>
            <div>
            <NavLink
            to="/adminside/admin/admingames"
            className="menu__item header__link"
            activeClassName="menu__link--active"
            exact
            >
                Games
            </NavLink>
            <NavLink
                to="/adminside/admin/adminusers"
                className="menu__item header__link"
                activeClassName="menu__link--active"
                exact
            >
                Users
            </NavLink>
            </div>
        </div>
    );
};

AdminGames.propTypes = {
    getUserRole: PropTypes.func.isRequired,
    getUsers: PropTypes.func.isRequired,
};

export default Admin;
