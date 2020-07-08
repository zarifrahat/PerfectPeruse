import * as BookToShelvesApiUtil from '../util/bookToShelves_api_util';

export const RECEIVE_BOOK_TO_SHELF = "RECEIVE_BOOK_TO_SHELF";
export const REMOVE_BOOK_FROM_SHELF = "REMOVE_BOOK_FROM_SHELF";
export const RECEIVE_BOOK_TO_SHELF_ERRORS = "RECEIVE_BOOK_TO_SHELF_ERRORS";

const receiveBookToShelf = (bookToShelf) => {
    return {
        type: RECEIVE_BOOK_TO_SHELF,
        bookToShelf: bookToShelf
    }
}
const removeBookFromShelf = (bookRemovedFromShelf) => {
    return {
        type: REMOVE_BOOK_FROM_SHELF,
        bookRemovedFromShelf: bookRemovedFromShelf
    }
}

const receiveBookshelfErrors = (errors) => {
    return {
        type: RECEIVE_BOOK_TO_SHELF_ERRORS,
        errors: errors
    }
}

export const addBookToBookshelf = (bookshelfId, bookId) => dispatch => {
    return BookToShelvesApiUtil.addBookToBookshelf(bookshelfId, bookId)
        .then(bookToShelf => dispatch(receiveBookshelf(bookToShelf)),
            error => dispatch(receiveBookshelfErrors(error.responseJSON))
        )
}
export const removeBookFromBookshelf = (bookshelfId, bookId) => dispatch => {
    return BookToShelvesApiUtil.removeBookFromBookshelf(bookshelfId, bookId)
        .then(bookRemovedFromShelf => dispatch(removeBookFromShelf(bookRemovedFromShelf)),
            error => dispatch(receiveBookshelfErrors(error.responseJSON))
        )
}

