import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import NavbarContainer from '../navbar/navbar_container';



class allBooks extends React.Component {
    constructor(props) {
        super(props);

        this.props.getBooks();
    }

    componentDidMount() {
        this.props.getBooks();
        this.props.getBookshelves(this.props.sessionId);
    }

    render() {
        if ((Object.keys(this.props.books).length !== 0)) {
            const { books } = this.props;
            let allBookIds = Object.keys(books);
            let allBooks = <li></li>
            allBooks = allBookIds.map(key => {
                let book = books[key];
                return (
                    <li key={key}
                        className="myBooks-main-showbooks-images">
                        <Link to={`/books/${book.id}`}>
                            <img src={this.props.books[book.id].photoUrl}
                                alt={book.title} />
                        </Link>
                    </li>

                )
            })
            return (
                <div className="allBooks">
                    <NavbarContainer />
                    <div className="allBooks-main">
                        <ul className="allBooks-main-showbooks-list">
                            {allBooks}
                        </ul>
                    </div>
                    <Footer />
                </div>
            )
        } else {
            return (
                <div className="myBooks">
                    <NavbarContainer />
                    <Footer />
                </div>
            )
        }
    }
}

export default allBooks;