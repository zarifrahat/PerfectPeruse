import { connect } from 'react-redux';
import Splash from './splash';
import { login } from '../../actions/session_actions';
import { getBooks } from '../../actions/book_actions';



const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user))
    // getBooks: () => dispatch(getBooks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);