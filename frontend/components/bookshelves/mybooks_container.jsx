import { connect } from 'react-redux';
import myBooks from './mybooks';
import { logout } from '../../actions/session_actions';
import { getBookshelves, createBookshelf, editBookshelf, deleteBookshelf} from '../../actions/bookshelf_actions';


const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    sessionId: state.session.id,
    bookshelves: state.entities.bookshelves
});

const mapDispatchToProps = dispatch => ({
    getBookshelves: (id) => dispatch(getBookshelves(id)),
    createBookshelf: (bookshelf) => dispatch(createBookshelf(bookshelf)),
    editBookshelf: (bookshelf) => dispatch(editBookshelf(bookshelf)),
    deleteBookshelf: (bookshelf) => dispatch(deleteBookshelf(bookshelf))
});

export default connect(mapStateToProps, mapDispatchToProps)(myBooks);