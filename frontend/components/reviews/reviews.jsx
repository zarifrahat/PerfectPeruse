import React from 'react';
import { Link } from 'react-router-dom';


class Reviews extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getReviews(this.props.bookId);
    }

    render(){
        debugger
            if(Object.keys(this.props.reviews).length >0){
                let allKeys = Object.keys(this.props.reviews)
                let allReviews = allKeys.map( key =>{
                    let star = "★";
                    let clearStar = "☆";
                    let orangeStars = star.repeat(this.props.reviews[key].rating)
                    let clearStars = clearStar.repeat((5 - this.props.reviews[key].rating))
                    return(
                        <div key={this.props.reviews[key].id}
                            className="bookshow-reviews-individual-review">
                            <div>
                                <img src={window.userURL} alt="User Profile" />
                                <div> 
                                    {this.props.reviews[key].username} rated it <span className="orange-stars">{orangeStars}</span><span className="clear-stars">{clearStars}</span>
                                    <p>{this.props.reviews[key].body}</p>
                                </div>
                            </div>
                        </div>
                    )
                    debugger
                })
                return(
                    <div className="bookshow-reviews">
                        <div className="bookshow-reviews-user-review">
                            <h1>MY ACTIVITY</h1>
                            <div> Review of {this.props.book.title}</div>
                            <div> Rating </div>
                            <div> Review</div>
                        </div>
                        <div className="bookshow-reviews-community-reviews">
                            <h1>COMMUNITY REVIEWS</h1>
                            <div >{allReviews}</div>    
                        </div>
                    </div>
                )
            } else{
                return(
                    <div className="bookshow-reviews">No reviews yet! Be the first!</div>
                )
            }
        
    }
}

export default Reviews;
