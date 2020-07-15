import { RECEIVE_BOOK_TO_SHELVES } from '../actions/bookToShelves_actions';

const bookToShelvesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOOK_TO_SHELVES:
            return action.bookToShelves;
        default:
            return state;
    }

}

export default bookToShelvesReducer;
