import { connect } from 'react-redux';
import GameDetails from '../components/GameDetails';
import { getGameBySlug } from '../selectors';
import { getReviews } from '../actions/reviews';

const mapStateToProps = (state, ownProps) => {
    const game = getGameBySlug(state.games.games, ownProps.slug);
    return {
      game,
      games: state.games.games,
    };
  };

  const mapDispatchToProps = (dispatch) => ({
    getReviews: (gameId) => dispatch(getReviews(gameId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameDetails);