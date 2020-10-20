import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = (state) => ({
    games: state.games.games,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);