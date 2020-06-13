import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer'
import booksErrorsReducer from './books_errors_reducer'
import bookshelvesErrorsReducer from './bookshelves_errors_reducer'

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    book: booksErrorsReducer,
    bookshelf: bookshelvesErrorsReducer
})

export default errorsReducer;