import { RECEIVE_BOOKSHELF, RECEIVE_BOOKSHELVES, RECEIVE_BOOKSHELF_ERRORS } from '../actions/bookshelf_actions';


const bookshelvesErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOOKSHELF:
            return [];
        case RECEIVE_BOOKSHELVES:
            return [];
        case RECEIVE_BOOKSHELF_ERRORS:
            return action.errors;
        default:
            return state;
    }
}

export default bookshelvesErrorsReducer;
