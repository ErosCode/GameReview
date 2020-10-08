import { connect } from 'react-redux';
import { getGames } from '../actions/games';

import Games from '../components/Games';

const mapStateToProps = (state) => ({
    games: state.games.games,
});

const mapDispatchToProps = (dispatch) => ({
    getGames: () => dispatch(getGames()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Games);