export const getBookshelves = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${id}/bookshelves`

    })
);


export const getBookshelf = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/bookshelves/${id}`
    })
);

export const createBookshelf = (bookshelf) => (
    $.ajax({
        method: 'POST',
        url: `/api/bookshelves`,
        data: { bookshelf }
    })
);

export const editBookshelf = (bookshelf) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/bookshelves/${bookshelf.id}`,
        data: { bookshelf }
    })
);


export const deleteBookshelf = (bookshelf) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/bookshelves/${bookshelf.id}`,
        data: { bookshelf }
    })
);
