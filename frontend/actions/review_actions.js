import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review: review
    }
}


const receiveReviews = (reviews) => {
    return {
        type: RECEIVE_REVIEWS,
        reviews: reviews
    }
}

const receiveReviewErrors = (errors) => {
    return {
        type: RECEIVE_REVIEW_ERRORS,
        errors: errors
    }
}



export const getReviews = (id) => dispatch => {
    return ReviewApiUtil.getReviews(id)
        .then(reviews => dispatch(receiveReviews(reviews)),
            error => dispatch(receiveReviewErrors(error.responseJSON))
        )
}



export const createReview = (review) => dispatch => {
    return ReviewApiUtil.createReview(review)
        .then(review => dispatch(receiveReview(review)),
            error => dispatch(receiveReviewErrors(error.responseJSON))
        )
}

export const editReview = (review) => dispatch => {
    return ReviewApiUtil.editReview(bookshelf)
        .then(review => dispatch(receiveReview(review)),
            error => dispatch(receiveReviewErrors(error.responseJSON))
        )
}



export const deleteReview = (id) => dispatch => {
    return ReviewApiUtil.deleteReview(id)
        .then(bookshelves => dispatch(receiveBookshelves(bookshelves)),
            error => dispatch(receiveBookshelfErrors(error.responseJSON))
        )
}


