import { connect } from 'react-redux';
import UsersHome from './usersHome';
import { logout } from '../../actions/session_actions';
import { getBookshelves } from '../../actions/bookshelf_actions';
import { getBooks } from '../../actions/book_actions';


const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    sessionId: state.session.id,
    books: state.entities.books,
    bookshelves: state.entities.bookshelves
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    getBookshelves: (id) => dispatch(getBookshelves(id)),
    getBooks: () => dispatch(getBooks()),

});

export default connect(mapStateToProps, mapDispatchToProps)(UsersHome);