import { connect } from 'react-redux';
import allBooks from './allBooks';
import { logout } from '../../actions/session_actions';
import { getBookshelves, createBookshelf, editBookshelf, deleteBookshelf } from '../../actions/bookshelf_actions';
import { getBooks } from '../../actions/book_actions';


const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    sessionId: state.session.id,
    books: state.entities.books,
    bookshelves: state.entities.bookshelves
});

const mapDispatchToProps = dispatch => ({
    getBooks: () => dispatch(getBooks()),
    getBookshelves: (id) => dispatch(getBookshelves(id)),
    createBookshelf: (bookshelf) => dispatch(createBookshelf(bookshelf)),
    editBookshelf: (bookshelf) => dispatch(editBookshelf(bookshelf)),
    deleteBookshelf: (bookshelf) => dispatch(deleteBookshelf(bookshelf))

});

export default connect(mapStateToProps, mapDispatchToProps)(allBooks);