import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import Footer from '../footer/footer';

class ReviewEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ""
        }
        this.props.getBooks();
    }
    componentDidMount() {
        console.log("componentdidmount")
        this.props.getReview(this.props.sessionId, this.props.bookId);
    }

    update(field) {
        return e => {
            console.log("BEFORE:",this.state)
            this.setState({ [field]: e.currentTarget.value });
            console.log("AFTER:",this.state)
        }
    }

    render() {
        const book = this.props.books[this.props.bookId];
        if ((Object.keys(this.props.books).length > 0) && (Object.keys(this.props.reviews).length > 0)) {
            let originalBody = this.props.reviews[this.props.sessionId].body;
            return (
                <div className="review-edit">
                    <NavbarContainer />
                    <div className="review-edit-menu">
                        {book.title} > Review > Edit
                    </div>
                    <div className="review-edit-book-info">
                        <img src={book.photoUrl}
                            alt={book.title} />
                        <div>
                            <div>{book.title}</div>
                            <div>by {book.author}</div>
                        </div>
                    </div>

                    <div className="review-edit-book-review">
                        <div>
                            <div>My rating:</div>
                            <div className="review-edit-rating">
                                <input type="radio" name="rating" id="1" className="review-edit-star"/>
                                <label for="1">★</label>
                                <input type="radio" name="rating" id="2" className="review-edit-star"/>
                                <label for="2">★</label>
                                <input type="radio" name="rating" id="3" className="review-edit-star"/>
                                <label for="3">★</label>
                                <input type="radio" name="rating" id="4" className="review-edit-star"/>
                                <label for="4">★</label>
                                <input type="radio" name="rating" id="5" className="review-edit-star"/>
                                <label for="5">★</label>
                            </div>
                        </div>
                        <div>What did you think?</div>
                    </div>
                    <textarea className="review-edit-textarea" 
                        onChange={this.update('body')}
                    defaultValue={originalBody} name="" id="" cols="30" rows="10"></textarea>
                    <button>Save</button>
                    <Footer />
                </div>
            )
        } else {
            return (
                <div>
                    Nothing to see here!
                </div>
            )
        }
    }
}

export default ReviewEdit;

