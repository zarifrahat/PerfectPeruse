import { RECEIVE_REVIEW_ERRORS } from '../actions/review_actions';


const reviewsErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_REVIEW_ERRORS:
            return action.errors;
        default:
            return state;
    }
}

export default reviewsErrorsReducer;
