import { combineReducers } from 'redux';
import usersReducer from './users_reducer'
import booksReducer from './books_reducer'
import bookshelvesReducer from './bookshelves_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    books: booksReducer,
    bookshelves: bookshelvesReducer
})

export default entitiesReducer;