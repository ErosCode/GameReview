import { connect } from 'react-redux';
import { getGames, getTags } from '../actions/games';
import { getUserRole, getUserItem } from '../actions/app';
import App from '../components/App/App';

const mapStateToProps = (state) => ({
    games: state.games.games,
    tags: state.games.tags,
    userRole: state.userRole,
});

const mapDispatchToProps = (dispatch) => ({
    getGames: () => dispatch(getGames()),
    getTags: () => dispatch(getTags()),
    getUserRole: (userRole) => dispatch(getUserRole(userRole)),
    getUserItem: (userItem) => dispatch(getUserItem(userItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);