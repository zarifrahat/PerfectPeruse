import * as BookApiUtil from '../util/book_api_util';

export const RECEIVE_BOOK = "RECEIVE_BOOK";
export const RECEIVE_BOOKS = "RECEIVE_BOOKS";
export const RECEIVE_BOOK_ERRORS = "RECEIVE_BOOK_ERRORS";

const receiveBook = (book) => {
    return {
        type: RECEIVE_BOOK,
        book: book
    }
}


const receiveBooks = (books) => {
    return {
        type: RECEIVE_BOOKS,
        books: books
    }
}

const receiveBookErrors = (errors) => {
    return {
        type: RECEIVE_BOOK_ERRORS,
        errors: errors
    }
}




export const getBook = (id) => dispatch => {
    return BookApiUtil.getBook(id)
        .then(book => dispatch(receiveBook(book)),
            error => dispatch(receiveBookErrors(error.responseJSON))
        )
}


export const getBooks = () => dispatch => {
    return BookApiUtil.getBooks()
        .then(books => dispatch(receiveBooks(books)),
            error => dispatch(receiveBookErrors(error.responseJSON))
        )
}