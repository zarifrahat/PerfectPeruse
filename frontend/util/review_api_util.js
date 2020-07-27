export const getReviews = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/books/${id}/reviews`
    })
);

export const getReview = (userId, bookId) => (
    $.ajax({
        method: 'GET',
        url: `/api/books/${bookId}/reviews/${userId}`
    })
);

export const createReview = (review) => (
    $.ajax({
        method: 'POST',
        url: `/api/books/${review.book_id}/reviews`,
        data: { review }
    })
);

export const editReview = (review) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/books/${review.book_id}/reviews/${review.user_id}`,
        data: { review }
    })
);


export const deleteReview = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/books/:book_id/reviews/${id}`,
        data: { id }
    })
);
