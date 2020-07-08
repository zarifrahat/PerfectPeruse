import * as BookToShelvesApiUtil from '../util/bookToShelves_api_util';

export const RECEIVE_BOOK_TO_SHELF = "RECEIVE_BOOK_TO_SHELF";
export const RECEIVE_BOOK_TO_SHELF_ERRORS = "RECEIVE_BOOK_TO_SHELF_ERRORS";

const receiveBookToShelf = (bookshelf) => {
    return {
        type: RECEIVE_BOOK_TO_SHELF,
        bookshelf: bookshelf
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
        .then(bookshelf => dispatch(receiveBookToShelf(bookshelf)),
            error => dispatch(receiveBookshelfErrors(error.responseJSON))
        )
}
export const removeBookFromBookshelf = (bookshelfId, bookId) => dispatch => {
    return BookToShelvesApiUtil.removeBookFromBookshelf(bookshelfId, bookId)
        .then(bookshelf => dispatch(receiveBookToShelf(bookshelf)),
            error => dispatch(receiveBookshelfErrors(error.responseJSON))
        )
}

