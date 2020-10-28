import { connect } from 'react-redux';

import AdminUsers from '../components/AdminUsers';

const mapStateToProps = (state) => ({
    userRole: state.app.userRole,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers);