import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import Footer from '../footer/footer';

class ReviewEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            body: ""
        }
        this.props.getBooks();
        this.handleEdit = this.handleEdit.bind(this)
        this.checkIfEditWasMade = this.checkIfEditWasMade.bind(this)
    }
    componentDidMount() {
        console.log("componentdidmount")
        this.props.getReview(this.props.sessionId, this.props.bookId);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }
    handleRadioButton(number){
        this.setState({rating: number});

    }
    checkIfEditWasMade(){
        debugger
        if (this.state.body.length === 0) {
            this.setState({ body: this.props.reviews[this.props.sessionId].body });
        }
        if (this.state.rating === 0) {
            this.setState({ rating: this.props.reviews[this.props.sessionId].rating });
        }
        debugger
    }

    handleEdit(e) {
        e.preventDefault();
        if(this.state.body === ""){
            this.setState({ body: this.props.reviews[this.props.sessionId].body });
        }
        if (this.state.rating === 0) {
            this.setState({ rating: this.props.reviews[this.props.sessionId].rating });
        }
        debugger
        const review = Object.assign({}, this.state, { user_id: this.props.sessionId, book_id: this.props.bookId});
        debugger
        this.props.editReview(review);
        debugger
        return <Redirect to={`/books/${this.props.bookId}`} />
    }

    render() {
        const book = this.props.books[this.props.bookId];
        if ((Object.keys(this.props.books).length > 0) && (Object.keys(this.props.reviews).length > 0)) {
            let originalBody = this.props.reviews[this.props.sessionId].body;
            let originalRating = this.props.reviews[this.props.sessionId].rating;
            return (
                <div className="review-edit">
                    <NavbarContainer />
                    <div className="review-edit-container">

                        <div className="review-edit-menu">
                            <Link to={`/books/${this.props.bookId}`}><div className="review-edit-menu-title">{book.title}</div></Link> > Review > Edit
                        </div>
                        <div className="review-edit-book-info">
                            <Link to={`/books/${this.props.bookId}`}><img src={book.photoUrl}
                                alt={book.title} /></Link>
                            <div>
                                <Link to={`/books/${this.props.bookId}`}><div className="review-edit-menu-title2">{book.title}</div></Link>
                                <div className="review-edit-menu-author">by {book.author}</div>
                            </div>
                        </div>

                        <div className="review-edit-book-review">
                            <div className="review-edit-book-review-line1">
                                <div className="review-edit-book-review-line1-myreview">My rating:</div>
                                <div className="review-edit-rating">
                                    <input type="radio" name="rating" id="5" className="review-edit-star"  
                                        defaultChecked={originalRating === 5} onChange={() => this.handleRadioButton(5)}/>
                                    <label for="5">★</label>
                                    <input type="radio" name="rating" id="4" className="review-edit-star" 
                                    defaultChecked={originalRating === 4} onChange={() => this.handleRadioButton(4)}/>
                                    <label for="4">★</label>
                                    <input type="radio" name="rating" id="3" className="review-edit-star" 
                                    defaultChecked={originalRating === 3} onChange={() => this.handleRadioButton(3)}/>
                                    <label for="3">★</label>
                                    <input type="radio" name="rating" id="2" className="review-edit-star" 
                                    defaultChecked={originalRating === 2} onChange={() => this.handleRadioButton(2)}/>
                                    <label for="2">★</label>
                                    <input type="radio" name="rating" id="1" className="review-edit-star" 
                                    defaultChecked={originalRating === 1} onChange={() => this.handleRadioButton(1)}/>
                                    <label for="1">★</label>
                                </div>
                            </div>
                            <div className="review-edit-book-review-line1-whatdidyouthink">What did you think?</div>
                        </div>
                        <textarea className="review-edit-textarea" 
                            onChange={this.update('body')}
                        defaultValue={originalBody} name="" id="" cols="30" rows="10"></textarea>
                        <form onSubmit={this.handleEdit}>
                                <input className="review-submit" type="submit" value="Save"/>
                        </form>
                    </div>
                    <Footer />
                </div>
            )
        } else {
            return (
                <div className="review-edit">
                    Nothing to see here!
                </div>
            )
        }
    }
}

export default ReviewEdit;

