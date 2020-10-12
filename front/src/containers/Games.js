import { connect } from 'react-redux';
import Games from '../components/Games';

const mapStateToProps = (state) => ({
    games: state.games.games,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Games);