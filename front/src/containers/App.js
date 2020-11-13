import { connect } from 'react-redux';
import { getGames } from '../actions/games';
import { getUserRole, getUserItem } from '../actions/app';
import App from '../components/App/App';

const mapStateToProps = (state) => ({
    games: state.games.games,
    userRole: state.userRole,
});

const mapDispatchToProps = (dispatch) => ({
    getGames: () => dispatch(getGames()),
    getUserRole: (userRole) => dispatch(getUserRole(userRole)),
    getUserItem: (userItem) => dispatch(getUserItem(userItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);