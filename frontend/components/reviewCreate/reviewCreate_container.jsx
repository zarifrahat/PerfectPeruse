import { connect } from 'react-redux';
import ReviewCreate from './reviewCreate';
import { getReview, createReview } from '../../actions/review_actions';
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
    createReview: (review) => dispatch(createReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewCreate);