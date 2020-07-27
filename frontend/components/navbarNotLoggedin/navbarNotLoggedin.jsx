import React from 'react';
import { Link } from 'react-router-dom';

class NavbarNotLoggedin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSearch: ""
        }
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        this.props.logout();
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {

        let searchbar = <li></li>
        let currentSearch = this.state.currentSearch;

        if ((currentSearch !== "") && this.props.books) {
            searchbar = Object.values(this.props.books).map(book => {
                if (book.title.toLowerCase().includes(currentSearch.toLowerCase())) {
                    return (
                        <Link to={`/books/${book.id}`}>
                            <li className="navbar-searchbar-results-book"
                                key={book.id}>
                                <h1>{book.title}</h1>
                                <h2>by {book.author}</h2>
                            </li>
                        </Link>

                    )
                }
            });

        }

        return (
            <div className="navbar">
                <div className="hidden">
                    <img className="navbar-search-icon" src={window.searchURL}
                        alt="Search" />
                </div>

                <div className="navbar-logo topnav">
                    <Link to="/user"><img src={window.perfectperuseURL}
                        alt="perfectperuse" /></Link>
                </div>

                <div className="navbar-leftbar bottomnav">
                    <ul >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>My Books</li>
                        <li>
                            <Link to="/allbooks">All Books</Link>
                        </li>
                    </ul>
                </div>

                <form className="navbar-searchbar  topnav">
                    <input type="text" placeholder="Search Books"
                        value={this.state.currentSearch}
                        onChange={this.update('currentSearch')}
                    />
                    <ul className="navbar-searchbar-results">{searchbar}</ul>
                    <button>
                        <img src={window.searchURL}
                            alt="Search" />
                    </button>
                </form>

                <div className="navbar-rightbar  topnav">
                    <ul >
                        <li>
                            <img src={window.github2URL}
                                alt="Github" />
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/goodreads-com/">
                                <img src={window.linkedinURL}
                                    alt="Linkedin" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/goodreads/">
                                <img src={window.instagramURL}
                                    alt="Instagram" />
                            </a>
                        </li>
                        <li>
                            <Link to={`/`}>Sign In</Link>
                        </li>
                        <li>
                            <Link to={`/`}>Join</Link>
                            
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavbarNotLoggedin;