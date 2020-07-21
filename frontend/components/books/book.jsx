import React from 'react';
import { Link } from 'react-router-dom';
import NavbarNotLoggedinContainer from '../navbarNotLoggedin/navbarNotLoggedin_container';
import NavbarContainer from '../navbar/navbar_container';


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
        this.props.addBookToBookshelf(this.props.bookshelves[event.srcElement.id].id, this.props.bookId)
        let array = this.props.bookshelves["All"]["books"].map(book => book.id).sort()
        debugger
        if (this.binarySearch(array, parseInt(this.props.bookId, 10)) === -1){
            debugger
            this.props.addBookToBookshelf(this.props.bookshelves["All"].id, this.props.bookId)
        }
        debugger

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
                    key={this.props.bookshelves[bookshelf].id}
                    onClick={this.addBookToBookshelfOnclick}>{bookshelf}</div>
                }
            
            });
    
            return(
                <div className="bookshow">
                    <div>{applicableNavbar}</div>
                    
                    <div className="bookshow-info">
                        <div className="bookshow-info-img">
                            <img src={book.photoUrl}
                                alt={book.title} />

                            <div className="bookshow-info-dropdown">
                                <div className="bookshow-info-dropdown"
                                    onClick={() => (document.getElementsByClassName("bookshow-info-dropdown-content")[0].style.display = "block")}>
                                    ---------</div>
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

                    <div className="bookshow-reviews">
                        <h1>COMMUNITY REVIEWS</h1>
                        <div className="bookshow-reviews-tempreview">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus euismod quis viverra nibh. Consequat mauris nunc congue nisi vitae suscipit. Id volutpat lacus laoreet non. Pharetra convallis posuere morbi leo urna. Elementum tempus egestas sed sed risus. Quam viverra orci sagittis eu volutpat odio facilisis. Nisl rhoncus mattis rhoncus urna. Lacus sed viverra tellus in hac habitasse platea dictumst. Maecenas accumsan lacus vel facilisis volutpat. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Sed enim ut sem viverra aliquet eget sit amet. Porttitor leo a diam sollicitudin tempor id eu nisl. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Cum sociis natoque penatibus et magnis dis. Quis blandit turpis cursus in hac habitasse platea.
                            </p>

                        </div>
                    </div>

                </div>
            )
        } else{
            return null;
        }
     
    }

}

export default Book;