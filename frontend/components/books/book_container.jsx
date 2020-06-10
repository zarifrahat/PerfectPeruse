import { connect } from 'react-redux';
import Book from './book';
import {getBook} from '../../actions/book_actions';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
    return ({
    
        bookId: ownProps.match.params.bookId,
        book: state.entities.books[ownProps.match.params.bookId],
        currentUser: state.entities.users[state.session.id]
})
};

const mapDispatchToProps = dispatch => ({
    getBook: (bookId) => dispatch(getBook(bookId)),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Book);