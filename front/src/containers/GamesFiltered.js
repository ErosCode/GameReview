import { connect } from 'react-redux';

import GamesFiltered from '../components/GamesFiltered';

const mapStateToProps = (state) => ({
    games: state.games.games,
});

const mapDispatchToProps = ({});

export default connect(mapStateToProps, mapDispatchToProps)(GamesFiltered);