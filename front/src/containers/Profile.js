import { connect } from 'react-redux';
import Profile from '../components/Profile';
import { getUserItem } from '../actions/app';

const mapStateToProps = (state) => ({
    userId: state.app.userId,
    userItem: state.app.userItem,
});

const mapDispatchToProps = (dispatch) => ({
    getUserItem: (userItem) => dispatch(getUserItem(userItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);