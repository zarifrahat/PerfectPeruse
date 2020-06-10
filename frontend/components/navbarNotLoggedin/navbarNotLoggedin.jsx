import React from 'react';
import { Link } from 'react-router-dom';

class NavbarNotLoggedin extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        this.props.logout();
    }

    render() {
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
                        <li>Friends</li>
                    </ul>
                </div>

                <form className="navbar-searchbar  topnav">
                    <input type="text" placeholder="Search Books" />
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