import { RECEIVE_BOOK, RECEIVE_BOOKS, RECEIVE_BOOK_ERRORS } from '../actions/book_actions';


const booksErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOOK:
            return [];
        case RECEIVE_BOOKS:
            return [];
        case RECEIVE_BOOK_ERRORS:
            return action.errors;
        default:
            return state;
    }
}

export default booksErrorsReducer;
