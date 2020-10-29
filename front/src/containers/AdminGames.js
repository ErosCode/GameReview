import { connect } from 'react-redux';
import { getUserRole } from '../actions/app';
import { deleteGame } from '../actions/admin';
import { getGames } from '../actions/games';
import AdminGames from '../components/AdminGames';

const mapStateToProps = (state) => ({
    userRole: state.app.userRole,
    games: state.games.games,
});

const mapDispatchToProps = (dispatch) => ({
    getUserRole: (userRole) => dispatch(getUserRole(userRole)),
    deleteGame: (itemId) => dispatch(deleteGame(itemId)),
    getGames: () => dispatch(getGames()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminGames);