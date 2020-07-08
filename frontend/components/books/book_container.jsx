import { connect } from 'react-redux';
import Book from './book';
import {getBook} from '../../actions/book_actions';
import {getBooks} from '../../actions/book_actions';
import { getBookshelves} from '../../actions/bookshelf_actions';
import { addBookToBookshelf} from '../../actions/bookToShelves_actions';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
    return ({
        sessionId: state.session.id,
        bookId: ownProps.match.params.bookId,
        book: state.entities.books[ownProps.match.params.bookId],
        bookshelves: state.entities.bookshelves,
        currentUser: state.entities.users[state.session.id]
})
};

const mapDispatchToProps = dispatch => ({
    getBooks: () => dispatch(getBooks()),
    getBookshelves: (id) => dispatch(getBookshelves(id)),
    addBookToBookshelf: (bookshelfId, bookId) => dispatch(addBookToBookshelf(bookshelfId, bookId)),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Book);