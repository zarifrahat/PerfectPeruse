import { connect } from 'react-redux';
import ReviewCreate from './reviewCreate';
import { createReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        sessionId: state.session.id,
        bookId: ownProps.match.params.bookId,
        currentUser: state.entities.users[state.session.id],
        reviews: state.entities.reviews,
        books: state.entities.books
    })
};

const mapDispatchToProps = dispatch => ({
    createReview: (id) => dispatch(createReview(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewCreate);