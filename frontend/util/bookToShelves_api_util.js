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
        url: `/api/book_to_shelves`,
        data: {
            bookToShelf: {
                bookshelf_id: bookshelfId,
                book_id: bookId
            }
        }
    })
);