import { connect } from 'react-redux';
import { getUserRole } from '../actions/app';
import AdminGames from '../components/AdminGames';

const mapStateToProps = (state) => ({
    userRole: state.app.userRole,
    games: state.games.games,
});

const mapDispatchToProps = (dispatch) => ({
    getUserRole: (userRole) => dispatch(getUserRole(userRole)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminGames);