export const getAllBookToBookshelf = (bookshelfId, bookId) => (
    $.ajax({
        method: 'GET',
        url: `/api/book_to_shelves`,
    })
);
export const addBookToBookshelf = (bookshelfId, bookId) => (
    $.ajax({
        method: 'POST',
        url: `/api/book_to_shelves`,
        data: {
            bookToShelf:{
                bookshelf_id: bookshelfId,
                book_id: bookId
            }
        }
    })
);

export const removeBookFromBookshelf = (bookshelfId, bookId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/book_to_shelves/1`,
        data: {
            bookToShelf: {
                bookshelf_id: bookshelfId,
                book_id: bookId
            }
        }
    })
);