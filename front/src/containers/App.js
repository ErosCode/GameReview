import { connect } from 'react-redux';
import { getUser } from '../actions/user';

import App from 'src/components/App';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    getUser: () => dispatch(getUser);
});

export default connect(mapStateToProps, mapDispatchToProps)(App);