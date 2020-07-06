import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import NavbarContainer from '../navbar/navbar_container';



class myBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBookshelf: "All"
        }
        this.props.getBooks();
    }

    componentDidMount() {
        this.props.getBookshelves(this.props.sessionId);
    }

    render(){
        // debugger
        this.props.books;
        // debugger
        if (this.props.bookshelves[this.state.selectedBookshelf]) {
            const { bookshelves } = this.props;
            let allbookshelves = <li></li> ;
            allbookshelves = Object.values(bookshelves).map(bookshelf => {
                    return <li key={bookshelf.id}>{bookshelf.bookshelf_name} ({bookshelf.books.length})</li>  
            })

            let allBooksForBookshelf = <li></li>
            allBooksForBookshelf = bookshelves[this.state.selectedBookshelf].books.map( book => {
                return(
                    <li key={book.id}
                        className="myBooks-main-showbooks-images">
                         <Link to={`/books/${book.id}`}> 
                            <img src={this.props.books[book.id].photoUrl}
                                alt={book.title} />
                        </Link>
                    </li>
                   
                    ) 
            })    
            return(
                <div className="myBooks">
                    <NavbarContainer/>
                    <div className="myBooks-main">
                        <div className="myBooks-main-bookshelves">
                            <h1>My Books</h1>
                            <ul className="myBooks-main-bookshelves-list">
                                {allbookshelves}
                            </ul>
                            <button>
                                Add shelf
                            </button>
                        </div>
                        <div className="myBooks-main-showbooks">
                            <ul className="myBooks-main-showbooks-list">
                                    {allBooksForBookshelf}
                                </ul>
                        </div>
                    </div>
                    <Footer/>
                </div>
            )
        } else{
            return (
                <div className="myBooks">
                    <NavbarContainer />
                    <Footer />
                </div>
            )
        }
    }
}

export default myBooks;