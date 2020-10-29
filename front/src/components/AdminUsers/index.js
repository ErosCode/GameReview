import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const AdminUsers = ({getUsers}) => {
  useEffect(() => (
    getUsers()
  ), [])
  return(
    <div className="adminUsers">
      {users.map((user) => (
        user.name
      ))}
    </div>
  );
};

AdminUsers.propTypes = {
  getUsers: PropTypes.func.isRequired,
}
export default AdminUsers;
