import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const AdminUsers = ({ users }) => {
  return(
    <div className="adminUsers">
      {users.map(({name}) => (
        <div>{name}</div>
      ))}
    </div>
  );
};

AdminUsers.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
};

AdminUsers.defaultProps = {
  users: []
}
export default AdminUsers;
