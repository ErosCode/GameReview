import { connect } from 'react-redux';
import AdminUsers from '../components/AdminUsers';
import { getUsers, userDelete } from '../actions/admin';

const mapStateToProps = (state) => ({
    userRole: state.app.userRole,
    users: state.admin.users,
});

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => dispatch(getUsers()),
    userDelete: (userId) => dispatch(userDelete(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers);