import React from 'react';
import { Link } from 'react-router-dom';


class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.showUserReview = this.showUserReview.bind(this);
    }

    componentDidMount(){
        this.props.getReviews(this.props.bookId);
    }

    userRatingStars(rating){
        let star = "★";
                let goldStars = star.repeat(rating)
                let clearStars = star.repeat((5 - rating))
        return(
            <span>
                <span className="gold-stars">{goldStars}</span><span className="clear-stars">{clearStars}</span>
            </span>
        )
    }

    showUserReview(currentUserReview){
        if(currentUserReview === null){
            return(
                <div className="bookshow-reviews-user-review">
                    <div className="bookshow-reviews-user-review-header">
                        <h1>MY ACTIVITY</h1>
                    </div>
                    <div> <span className="bookshow-reviews-user-review-details">Review of</span> {this.props.book.title}</div>
                    <div> <span className="bookshow-reviews-user-review-details">Rating</span> <span className="clear-stars">★★★★★</span></div>
                    <div><span className="bookshow-reviews-user-review-details">Review</span>
                        <Link to={`/books/${this.props.book.id}/review/create`}>
                            <button className="bookshow-reviews-user-review-writeareview">Write a review</button>
                        </Link>
                    </div>
                </div>
            )
        }else{
            return(
                <div className="bookshow-reviews-user-review">
                    <div className="bookshow-reviews-user-review-header">
                        <h1>MY ACTIVITY</h1>
                        <Link to={`/books/${this.props.book.id}/review/edit`}>
                            Edit
                                </Link>
                    </div>
                    <div> <span className="bookshow-reviews-user-review-details">Review of</span>  <span>{this.props.book.title}</span></div>
                    <div> <span className="bookshow-reviews-user-review-details">Rating</span>  <span>{this.userRatingStars(currentUserReview.rating)}</span></div>
                    <div> <span className="bookshow-reviews-user-review-details">Review</span>  <span>{currentUserReview.body}</span></div>
                </div>
            )
        }
    }

    render(){
        
            let currentUserReview = null;
            if(Object.keys(this.props.reviews).length >0){
                let allKeys = Object.keys(this.props.reviews)
                let allReviews = allKeys.map( key =>{
                    if (this.props.reviews[key].user_id === this.props.sessionId){
                        currentUserReview = this.props.reviews[key]
                    }

                    let star = "★";
                    // let clearStar = "☆";
                    let orangeStars = star.repeat(this.props.reviews[key].rating)
                    let clearStars = star.repeat((5 - this.props.reviews[key].rating))
                    return(
                        <div key={this.props.reviews[key].id}
                            className="bookshow-reviews-individual-review">
                            <div>
                                <img src={window.userURL} alt="User Profile" />
                                <div className="bookshow-reviews-individual-review-fulltext"> 
                                    <div className="bookshow-reviews-individual-review-title">
                                        <div>
                                            {this.props.reviews[key].username} rated it <span className="orange-stars">{orangeStars}</span><span className="clear-stars">{clearStars}</span>
                                        </div>
                                        <span>{this.props.reviews[key].created_at.split("").slice(0,10)}</span>
                                    </div>
                                    <p>{this.props.reviews[key].body}</p>
                                </div>
                            </div>
                        </div>
                    )
                    
                })
                return(
                    <div className="bookshow-reviews">
                        {this.showUserReview(currentUserReview)}
                        <div className="bookshow-reviews-community-reviews">
                            <h1>COMMUNITY REVIEWS</h1>
                            <div >{allReviews}</div>    
                        </div>
                    </div>
                )
            } else{
                return(
                    <div className="bookshow-reviews">
                        {this.showUserReview(currentUserReview)}
                        <div className="bookshow-reviews-community-reviews">
                            <h1>COMMUNITY REVIEWS</h1>
                            <div className="bookshow-no-reviews">No reviews yet! Be the first!</div>
                        </div>
                    </div>
                )
            }
        
    }
}

export default Reviews;
