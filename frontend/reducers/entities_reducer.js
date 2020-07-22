import { combineReducers } from 'redux';
import usersReducer from './users_reducer'
import booksReducer from './books_reducer'
import bookshelvesReducer from './bookshelves_reducer'
import bookToShelvesReducer from './bookToShelves_reducer'
import reviewsReducer from './reviews_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    books: booksReducer,
    bookshelves: bookshelvesReducer,
    bookToShelves: bookToShelvesReducer,
    reviews: reviewsReducer
})

export default entitiesReducer;