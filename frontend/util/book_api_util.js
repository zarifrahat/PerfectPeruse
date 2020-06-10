export const getBook = id => (
    $.ajax({
        method: 'GET',
        url: `/api/books/${id}`
    })
);


export const getBooks = () => (
    $.ajax({
        method: 'GET',
        url: `/api/books`
    })
);