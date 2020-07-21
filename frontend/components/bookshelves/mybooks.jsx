import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import NavbarContainer from '../navbar/navbar_container';



class myBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBookshelf: "All",
            addShelf:""
        }
        this.props.getBooks();
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    componentDidMount() {
        this.props.getBookshelves(this.props.sessionId);
    }

    handleChange(event){
        this.setState({ addShelf: event.target.value });
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state)
        debugger
        console.log("new bookshelf added!")
        debugger
        const bookshelf = {
            bookshelf_name: this.state.addShelf,
            user_id: this.props.sessionId
        };
        debugger
        this.props.createBookshelf(bookshelf);
        debugger
        this.setState({ addShelf: "" });
    }

    render(){
        // debugger
        console.log(this.props.bookshelves[this.state.selectedBookshelf]);
        // debugger
        if (this.props.bookshelves[this.state.selectedBookshelf]) {
            const { bookshelves } = this.props;
            let allbookshelves = <li></li> ;
            allbookshelves = Object.values(bookshelves).map(bookshelf => {
                    return <li key={bookshelf.id}
                        onClick={() => this.setState({ selectedBookshelf: bookshelf.bookshelf_name})}>
                        {bookshelf.bookshelf_name} ({bookshelf.books.length})</li>  
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
                            <h4>Bookshelves</h4>
                            <ul className="myBooks-main-bookshelves-list">
                                {allbookshelves}
                            </ul>
                                <h4>Add shelf</h4>
                                <form onSubmit={this.handleSubmit}>
                                    <input type="text" value={this.state.addShelf} onChange={this.handleChange}/>
                                    <input type="submit" value="add"/>
                                </form>
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