import React from 'react';
import { Link } from 'react-router-dom';
import NavbarNotLoggedinContainer from '../navbarNotLoggedin/navbarNotLoggedin_container';
import NavbarContainer from '../navbar/navbar_container';
import ReviewsContainer from '../reviews/reviews_container';
import Footer from '../footer/footer';

class Book extends React.Component{
    constructor(props){
        super(props);
        this.book = {}
        this.addBookToBookshelfOnclick = this.addBookToBookshelfOnclick.bind(this);
        this.binarySearch = this.binarySearch.bind(this);
    }
    componentDidMount(){
        this.props.getBooks();
        this.props.getBookshelves(this.props.sessionId);
        this.props.getAllBookToBookshelf();
    }

    binarySearch(array, bookId) {
        if (array.length === 0) return -1;

        const middleOfArray = Math.floor(array.length / 2);
        if (array[middleOfArray] > bookId) {
            return this.binarySearch(array.slice(0, middleOfArray), bookId);
        } else if (array[middleOfArray] < bookId) {
            const rightSideOfArray = this.binarySearch(array.slice(middleOfArray + 1), bookId);
            return rightSideOfArray === -1 ? -1 : rightSideOfArray + middleOfArray + 1;
        } else {
            return middleOfArray;
        }
    }
    addBookToBookshelfOnclick(){
        let selectedShelf = this.props.bookshelves[event.srcElement.id]["books"].map(book => book.id).sort()
        if (this.binarySearch(selectedShelf, parseInt(this.props.bookId, 10)) === -1) {
            this.props.addBookToBookshelf(this.props.bookshelves[event.srcElement.id].id, this.props.bookId)
        }

        let array = this.props.bookshelves["All"]["books"].map(book => book.id).sort()
        if (this.binarySearch(array, parseInt(this.props.bookId, 10)) === -1){
            
            this.props.addBookToBookshelf(this.props.bookshelves["All"].id, this.props.bookId)
        }
        

        if (event.srcElement.id === "Read"){
            //REMOVE FROM OTHERS
            this.props.removeBookFromBookshelf(parseInt(this.props.bookshelves["Currently Reading"].id, 10), parseInt(this.props.bookId, 10))
            this.props.removeBookFromBookshelf(parseInt(this.props.bookshelves["Want to Read"].id, 10), parseInt(this.props.bookId, 10))
            // removeBookFromBookshelf(bookshelfId, bookId)
        } else if (event.srcElement.id === "Currently Reading"){
            //REMOVE FROM OTHERS
            this.props.removeBookFromBookshelf(parseInt(this.props.bookshelves["Read"].id, 10), parseInt(this.props.bookId, 10))
            this.props.removeBookFromBookshelf(parseInt(this.props.bookshelves["Want to Read"].id, 10), parseInt(this.props.bookId, 10))
        } else if (event.srcElement.id === "Want to Read") {
            //REMOVE FROM OTHERS
            this.props.removeBookFromBookshelf(parseInt(this.props.bookshelves["Currently Reading"].id, 10), parseInt(this.props.bookId, 10))
            this.props.removeBookFromBookshelf(parseInt(this.props.bookshelves["Read"].id, 10), parseInt(this.props.bookId, 10))
        }
        this.props.getBookshelves(this.props.sessionId);
        (document.getElementsByClassName("bookshow-info-dropdown-content")[0].style.display = "none")
    }

    render(){
        let applicableNavbar;
        if (!this.props.sessionId) {
            applicableNavbar = <NavbarNotLoggedinContainer />
        } else {
            applicableNavbar = <NavbarContainer/>
        }
        
        if (this.props.book && this.props.bookshelves){
            const { book } = this.props;
    
            let usersBookshelvesList = Object.keys(this.props.bookshelves).map(bookshelf => {
                if(bookshelf !== "All"){
                    return <div id={bookshelf} 
                    className="bookshow-info-dropdown-content-div"
                    key={this.props.bookshelves[bookshelf].id}
                    onClick={this.addBookToBookshelfOnclick}>
                        {bookshelf}
                    </div>
                }
            
            });

            let chosenStatus = "Want to Read";
            let readArray = this.props.bookshelves["Read"]["books"].map(book => book.id).sort()
            if (this.binarySearch(readArray, parseInt(this.props.bookId, 10)) !== -1) {
                chosenStatus = "Read";
            }
            let currentlyReadingArray = this.props.bookshelves["Currently Reading"]["books"].map(book => book.id).sort()
            if (this.binarySearch(currentlyReadingArray, parseInt(this.props.bookId, 10)) !== -1) {
                chosenStatus = "Currently Reading";
            }
    
            return(
                <div className="bookshow">
                    <div>{applicableNavbar}</div>
                    
                    <div className="bookshow-info">
                        <div className="bookshow-info-img">
                            <img src={book.photoUrl}
                                alt={book.title} />

                            <div className="bookshow-info-dropdown">
                                <div className="bookshow-info-dropdown-button"
                                    onClick={() => {
                                        if (document.getElementsByClassName("bookshow-info-dropdown-content")[0].style.display === "none"){
                                            (document.getElementsByClassName("bookshow-info-dropdown-content")[0].style.display = "block")
                                        } else{
                                            (document.getElementsByClassName("bookshow-info-dropdown-content")[0].style.display = "none")
                                        }
                                    }}>
                                    {chosenStatus}</div>
                                <div className="bookshow-info-dropdown-content">
                                    {usersBookshelvesList}
                                </div>
                            </div>
                        </div>

                        <div className="bookshow-info-text">
                            <h1>
                                {book.title}
                            </h1>
                            <h2>
                                by {book.author}
                            </h2>
                            <p>
                                {book.summary}
                            </p>
                            
                        </div>

                    </div>
                        <ReviewsContainer
                            bookId={this.props.bookId}
                            book={book}
                        />
                    <Footer/>
                </div>

            )
        } else{
            return null;
        }
     
    }

}

export default Book;