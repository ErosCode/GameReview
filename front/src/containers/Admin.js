import { connect } from 'react-redux';
import { getUserRole } from '../actions/app';
import { getUsers } from '../actions/admin';
import Admin from '../components/Admin';

const mapStateToProps = (state) => ({
    userRole: state.app.userRole,
    users: state.admin.users,
});

const mapDispatchToProps = (dispatch) => ({
    getUserRole: (userRole) => dispatch(getUserRole(userRole)),
    getUsers: () => dispatch(getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);