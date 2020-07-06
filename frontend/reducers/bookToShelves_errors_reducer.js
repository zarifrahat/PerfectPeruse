import { RECEIVE_BOOK_TO_SHELF, RECEIVE_BOOK_TO_SHELF_ERRORS } from '../actions/bookToShelves_actions';


const bookToShelvesErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOOK_TO_SHELF:
            return [];
        case RECEIVE_BOOK_TO_SHELF_ERRORS:
            return action.errors;
        default:
            return state;
    }
}

export default bookToShelvesErrorsReducer;
