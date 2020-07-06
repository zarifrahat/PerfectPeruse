export const addBookToBookshelf = (bookshelfId, bookId) => (
    $.ajax({
        method: 'POST',
        url: `/api/book_to_shelves`,
        data: {
            bookshelf_id: bookshelfId,
            book_id: bookId
        }
    })
);