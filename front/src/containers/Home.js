import { connect } from 'react-redux';
import Home from '../components/Home';
import { getLastGames, getLastReviews } from '../actions/home';
const mapStateToProps = (state) => ({
    lastGames: state.home.lastGames,
    lastReviews: state.home.lastReviews,
});

const mapDispatchToProps = (dispatch) => ({
    getLastGames: () => dispatch(getLastGames()),
    getLastReviews: () => dispatch(getLastReviews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);