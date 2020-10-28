import { connect } from 'react-redux';
import { getUserRole } from '../actions/app';
import Admin from '../components/Admin';

const mapStateToProps = (state) => ({
    userRole: state.app.userRole,
});

const mapDispatchToProps = (dispatch) => ({
    getUserRole: (userRole) => dispatch(getUserRole(userRole)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);