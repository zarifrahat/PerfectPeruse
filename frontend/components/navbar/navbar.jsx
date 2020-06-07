import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="navbar">
                
                
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
                                    <li>Logout</li>
                            </ul>
                        </li>
                    </ul>

                    
                </div>  

            </div>
        )
    }
}

export default Navbar;