import { connect } from 'react-redux';
import { getGames } from '../actions/games';
import App from '../components/App/App';

const mapStateToProps = (state) => ({
    games: state.games.games,
});

const mapDispatchToProps = (dispatch) => ({
    getGames: () => dispatch(getGames()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);