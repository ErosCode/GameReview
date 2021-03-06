import { connect } from 'react-redux';
import Header from '../components/Header';
import { getUserRole } from '../actions/app';

const mapStateToProps = (state) => ({
    games: state.games.games,
    userRole: state.app.userRole,
});

const mapDispatchToProps = (dispatch) => ({
    getUserRole: (userRole) => dispatch(getUserRole(userRole)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);