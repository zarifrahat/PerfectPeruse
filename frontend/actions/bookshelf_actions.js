import * as BookshelfApiUtil from '../util/bookshelf_api_util';

export const RECEIVE_BOOKSHELF = "RECEIVE_BOOKSHELF";
export const RECEIVE_BOOKSHELVES = "RECEIVE_BOOKSHELVES";
export const RECEIVE_BOOKSHELF_ERRORS = "RECEIVE_BOOKSHELF_ERRORS";

const receiveBookshelf = (bookshelf) => {
    return {
        type: RECEIVE_BOOKSHELF,
        bookshelf: bookshelf
    }
}


const receiveBookshelves = (bookshelves) => {
    return {
        type: RECEIVE_BOOKSHELVES,
        bookshelves: bookshelves
    }
}

const receiveBookshelfErrors = (errors) => {
    return {
        type: RECEIVE_BOOKSHELF_ERRORS,
        errors: errors
    }
}



export const getBookshelf = (id) => dispatch => {
    return BookshelfApiUtil.getBookshelf(id)
        .then(bookshelf => dispatch(receiveBookshelf(bookshelf)),
            error => dispatch(receiveBookshelfErrors(error.responseJSON))
        )
}

export const getBookshelves = (id) => dispatch => {
    return BookshelfApiUtil.getBookshelves(id)
        .then(bookshelves => dispatch(receiveBookshelves(bookshelves)),
            error => dispatch(receiveBookshelfErrors(error.responseJSON))
        )
}


export const createBookshelf = (bookshelf) => dispatch => {
    return BookshelfApiUtil.createBookshelf(bookshelf)
        .then(bookshelf => dispatch(receiveBookshelf(bookshelf)),
            error => dispatch(receiveBookshelfErrors(error.responseJSON))
        )
}

export const editBookshelf = (bookshelf) => dispatch => {
    return BookshelfApiUtil.editBookshelf(bookshelf)
        .then(bookshelf => dispatch(receiveBookshelf(bookshelf)),
            error => dispatch(receiveBookshelfErrors(error.responseJSON))
        )
}



export const deleteBookshelf = (bookshelf) => dispatch => {
    return BookshelfApiUtil.deleteBookshelf(bookshelf)
        .then(bookshelves => dispatch(receiveBookshelves(bookshelves)),
            error => dispatch(receiveBookshelfErrors(error.responseJSON))
        )
}


