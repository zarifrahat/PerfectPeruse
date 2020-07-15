import * as BookToShelvesApiUtil from '../util/bookToShelves_api_util';

export const RECEIVE_BOOK_TO_SHELVES = "RECEIVE_BOOK_TO_SHELVES";
export const RECEIVE_BOOK_TO_SHELF = "RECEIVE_BOOK_TO_SHELF";
export const RECEIVE_BOOK_TO_SHELF_ERRORS = "RECEIVE_BOOK_TO_SHELF_ERRORS";

const receiveBookToShelves = (bookToShelves) => {
    debugger
    return {
        type: RECEIVE_BOOK_TO_SHELVES,
        bookToShelves: bookToShelves
    }
}
const receiveBookToShelf = (bookToShelf) => {
    return {
        type: RECEIVE_BOOK_TO_SHELF,
        bookToShelf: bookToShelf
    }
}


const receiveBookshelfErrors = (errors) => {
    return {
        type: RECEIVE_BOOK_TO_SHELF_ERRORS,
        errors: errors
    }
}


export const getAllBookToBookshelf = () => dispatch => {
    return BookToShelvesApiUtil.getAllBookToBookshelf()
        .then(bookToShelves => dispatch(receiveBookToShelves(bookToShelves)),
            error => dispatch(receiveBookshelfErrors(error.responseJSON))
        )
}
export const addBookToBookshelf = (bookshelfId, bookId) => dispatch => {
    return BookToShelvesApiUtil.addBookToBookshelf(bookshelfId, bookId)
        .then(bookToShelf => dispatch(receiveBookToShelf(bookToShelf)),
            error => dispatch(receiveBookshelfErrors(error.responseJSON))
        )
}
export const removeBookFromBookshelf = (bookshelfId, bookId) => dispatch => {
    return BookToShelvesApiUtil.removeBookFromBookshelf(bookshelfId, bookId)
        .then(bookshelf => dispatch(receiveBookToShelf(bookshelf)),
            error => dispatch(receiveBookshelfErrors(error.responseJSON))
        )
}

