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
        this.props.getBooks();
        this.props.getBookshelves(this.props.sessionId);
    }

    handleChange(event){
        this.setState({ addShelf: event.target.value });
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state)
        
        console.log("new bookshelf added!")
        
        const bookshelf = {
            bookshelf_name: this.state.addShelf,
            user_id: this.props.sessionId
        };
        
        this.props.createBookshelf(bookshelf);
        
        this.setState({ addShelf: "" });
    }

    render(){
        console.log("Loaded ONE TIME")
        console.log(this.props.bookshelves[this.state.selectedBookshelf]);
        if (this.props.bookshelves[this.state.selectedBookshelf] && (Object.keys(this.props.books).length !== 0)) {
            const { bookshelves } = this.props;
            let allbookshelves = <li></li> ;
            allbookshelves = Object.values(bookshelves).map(bookshelf => {
                    return <li key={bookshelf.id}
                        onClick={() => this.setState({ selectedBookshelf: bookshelf.bookshelf_name})}>
                        <span>{bookshelf.bookshelf_name} ({bookshelf.books.length})</span>
                        </li>  
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
                            <h1 >My Books</h1>
                            <div>Bookshelves</div>
                            <ul className="myBooks-main-bookshelves-list">
                                {allbookshelves}
                            </ul>
                                <div>Add a shelf:</div>
                                <form onSubmit={this.handleSubmit}>
                                    <input className="myBooks-main-bookshelves-text" type="text" value={this.state.addShelf} onChange={this.handleChange}/>
                                <input className="myBooks-main-bookshelves-submit" type="submit" value="add"/>
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