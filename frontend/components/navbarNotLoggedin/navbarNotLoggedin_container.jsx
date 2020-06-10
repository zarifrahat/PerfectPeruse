import { connect } from 'react-redux';
import NavbarNotLoggedin from './navbarNotLoggedin';


const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    books: state.entities.books,
    users: state.entities.users
});


export default connect(mapStateToProps, null)(NavbarNotLoggedin);