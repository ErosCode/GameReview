import { connect } from 'react-redux';
import { getReviews } from '../actions/reviews';

import Reviews from '../components/Reviews';

const mapStateToProps = (state) => {
};

const mapDispatchToProps = (dispatch) => ({
    getReviews: (gameId) => dispatch(getReviews(gameId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);