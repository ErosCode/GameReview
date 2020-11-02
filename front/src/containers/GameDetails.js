import { connect } from 'react-redux';
import GameDetails from '../components/GameDetails';
import { getGameBySlug } from '../selectors';
import { getReviews, addLike } from '../actions/reviews';
import { deleteReview } from '../actions/admin';

const mapStateToProps = (state, ownProps) => {
    const game = getGameBySlug(state.games.games, ownProps.slug);
    return {
      game,
      games: state.games.games,
      reviews: state.games.reviews,
      userRole: state.app.userRole,
    };
  };

  const mapDispatchToProps = (dispatch) => ({
    getReviews: (gameId) => dispatch(getReviews(gameId)),
    addLike: (reviewId, reviewLikes) => dispatch(addLike(reviewId, reviewLikes)),
    deleteReview: (itemId) => dispatch(deleteReview(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameDetails);