import { connect } from 'react-redux';
import NavbarNotLoggedin from './navbarNotLoggedin';


const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
});


export default connect(mapStateToProps, null)(NavbarNotLoggedin);