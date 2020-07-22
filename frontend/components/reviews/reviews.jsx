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
                    return(
                        <div key={this.props.reviews[key].id}>
                            <h4>{this.props.reviews[key].user_id}</h4>
                            <h4>{this.props.reviews[key].rating}</h4>
                            <h5>{this.props.reviews[key].body}</h5>
                        </div>
                    )
                    debugger
                })
                return(
                    <div>{allReviews}</div>    
                )
            } else{
                return(
                    <div>No reviews yet! Be the first!</div>
                )
            }
        
    }
}

export default Reviews;
