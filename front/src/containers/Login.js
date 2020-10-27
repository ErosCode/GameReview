import { connect } from 'react-redux';
import { getUserRole } from '../actions/app';
import Login from '../components/Login';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    getUserRole: (userRole) => dispatch(getUserRole(userRole))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);