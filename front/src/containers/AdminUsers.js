import { connect } from 'react-redux';
import AdminUsers from '../components/AdminUsers';

const mapStateToProps = (state) => ({
    userRole: state.app.userRole,
    users: state.admin.users,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers);