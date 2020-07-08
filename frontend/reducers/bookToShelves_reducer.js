import { RECEIVE_BOOK_TO_SHELF } from '../actions/bookToShelves_actions';

const bookToShelvesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOOK_TO_SHELF:
            return action.bookshelves;
        default:
            return state;
    }

}

export default bookToShelvesReducer;
