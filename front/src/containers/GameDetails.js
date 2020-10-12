import { connect } from 'react-redux';
import GameDetails from '../components/GameDetails';
import { getGameBySlug } from '../selectors';

const mapStateToProps = (state, ownProps) => {
    const game = getGameBySlug(state.games.games, ownProps.slug);
    return {
      game,
    };
  };

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(GameDetails);