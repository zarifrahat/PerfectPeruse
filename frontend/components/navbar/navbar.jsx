import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        this.props.logout();
    }

    render(){
        return(
            <div className="navbar">
                <div className="hidden">
                    <img className="navbar-search-icon" src={window.searchURL}
                        alt="Search" />  
                </div>
                
                <div className="navbar-logo topnav">
                    <img src={window.perfectperuseURL}
                        alt="perfectperuse" />
                </div>

                <div className="navbar-leftbar bottomnav">
                    <ul >
                        <li>
                            <Link to="/user">Home</Link>
                        </li>
                        <li>My Books</li>
                        <li>Friends</li>
                    </ul>
                </div>

                <form className="navbar-searchbar  topnav">
                    <input type="text" placeholder="Search Books"/>
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
                        <li className="dropdown">                                
                            <img className="navbar-rightbar-user" src={window.userURL}
                                alt="User" />
                            <ul className="dropdown-content">
                                 <li>{this.props.currentUser.username.toUpperCase()}</li>
                                    <li>Profile</li>
                                    <li>My Books</li>
                                <li onClick={this.handleLogout}>Logout</li>
                            </ul>
                        </li>
                    </ul>
                </div>  

                <div className="hidden modal-parent">
                    <button className="modal-button"
                        onClick={() => (document.getElementsByClassName("modal")[0].style.display = "block")}
                    >
                        <img  src={window.userURL}
                        alt="User" />
                    </button>
                </div>

                <div className="modal">
                    <div className="modal-content slide-right">
                        <span className="modal-close"
                            onClick={() => (document.getElementsByClassName("modal")[0].style.display = "none")}
                           >
                                &times;
                        </span>
                        <ul >
                            <li>{this.props.currentUser.username.toUpperCase()}</li>
                            <li>Profile</li>
                            <li>My Books</li>
                            <li>
                                Logout
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;