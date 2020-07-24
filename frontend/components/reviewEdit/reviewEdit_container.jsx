import { connect } from 'react-redux';
import ReviewEdit from './reviewEdit';
import { getReview, editReview } from '../../actions/review_actions';
import { getBooks } from '../../actions/book_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        sessionId: state.session.id,
        bookId: ownProps.match.params.bookId,
        books: state.entities.books,
        currentUser: state.entities.users[state.session.id],
        reviews: state.entities.reviews
    })
};

const mapDispatchToProps = dispatch => ({
    getBooks: () => dispatch(getBooks()),
    getReview: (userId, bookId) => dispatch(getReview(userId, bookId)),
    editReview: (review) => dispatch(editReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewEdit);