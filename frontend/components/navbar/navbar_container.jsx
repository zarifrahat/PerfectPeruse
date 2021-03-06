import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state) => {
    
    return ({
        currentUser: state.entities.users[state.session.id],
        books: state.entities.books,
        users: state.entities.users
    })
    
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);