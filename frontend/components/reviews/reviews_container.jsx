import { connect } from 'react-redux';
import Reviews from './reviews';
import { getReviews } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        sessionId: state.session.id,
        // bookId: ownProps.match.params.bookId,
        // book: state.entities.books[ownProps.match.params.bookId],
        // bookshelves: state.entities.bookshelves,
        currentUser: state.entities.users[state.session.id],
        reviews: state.entities.reviews
    })
};

const mapDispatchToProps = dispatch => ({
    getReviews: (id) => dispatch(getReviews(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);