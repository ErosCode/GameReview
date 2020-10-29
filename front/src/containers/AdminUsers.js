import { connect } from 'react-redux';
import { getUsers } from '../actions/admin';
import AdminUsers from '../components/AdminUsers';

const mapStateToProps = (state) => ({
    userRole: state.app.userRole,
    users: state.admin.users,
});

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => dispatch(getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers);