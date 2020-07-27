import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import Footer from '../footer/footer';

class ReviewCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 4,
            body: ""
        }
        this.props.getBooks();
        this.handleCreate = this.handleCreate.bind(this)
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }
    handleRadioButton(number) {
        this.setState({ rating: number });

    }

    handleCreate(e) {
        e.preventDefault();
        debugger
        const review = Object.assign({}, this.state, { user_id: this.props.sessionId, book_id: this.props.bookId });
        debugger
        this.props.createReview(review);
        debugger
    }

    render() {
        const book = this.props.books[this.props.bookId];
        if (Object.keys(this.props.books).length > 0) {
            return (
                <div className="review-edit">
                    <NavbarContainer />
                    <div className="review-edit-menu">
                        <Link to={`/books/${this.props.bookId}`}><div>{book.title}</div></Link> > Review > Create
                    </div>
                    <div className="review-edit-book-info">
                        <Link to={`/books/${this.props.bookId}`}><img src={book.photoUrl}
                            alt={book.title} /></Link>
                        <div>
                            <Link to={`/books/${this.props.bookId}`}><div>{book.title}</div></Link>
                            <div>by {book.author}</div>
                        </div>
                    </div>

                    <div className="review-edit-book-review">
                        <div>
                            <div>My rating:</div>
                            <div className="review-edit-rating">
                                <input type="radio" name="rating" id="1" className="review-edit-star"
                                     onChange={() => this.handleRadioButton(1)} />
                                <label for="1">★</label>
                                <input type="radio" name="rating" id="2" className="review-edit-star"
                                     onChange={() => this.handleRadioButton(2)} />
                                <label for="2">★</label>
                                <input type="radio" name="rating" id="3" className="review-edit-star"
                                     onChange={() => this.handleRadioButton(3)} />
                                <label for="3">★</label>
                                <input type="radio" name="rating" id="4" className="review-edit-star"
                                     onChange={() => this.handleRadioButton(4)} />
                                <label for="4">★</label>
                                <input type="radio" name="rating" id="5" className="review-edit-star"
                                     onChange={() => this.handleRadioButton(5)} />
                                <label for="5">★</label>
                            </div>
                        </div>
                        <div>What did you think?</div>
                    </div>
                    <textarea className="review-edit-textarea"
                        onChange={this.update('body')}
                        defaultValue="" name="" id="" cols="30" rows="10"></textarea>
                    <form onSubmit={this.handleCreate}>
                        <input type="submit" value="Save" />
                    </form>
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

export default ReviewCreate;

