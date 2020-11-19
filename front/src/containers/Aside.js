import { connect } from 'react-redux';

import Aside from '../components/Aside';

const mapStateToProps = (state) => ({
    tags: state.games.tags,
});

const mapDispatchToProps = ({});

export default connect(mapStateToProps, mapDispatchToProps)(Aside);