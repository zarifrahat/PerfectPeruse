import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';


class UsersHome extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render(){
        return(
            <div className="usershome">
                <h1>Hello, {this.props.currentUser.username}</h1>
                <button onClick={this.handleLogout}>Log out</button>
                {/* NAVBAR GOES HERE */}
                <div className="usershome-currentlyreading">
                    <p>CURRENTLY READING</p>
                    <img src={window.ofmiceandmenURL}
                        alt="Of Mice and Men" />  
                    <p>Of Mice and Men</p>
                    <p>By John Steinbeck</p>
                </div>

                <div className="usershome-updates">
                    <div className="usershome-update-1">
                        <h1>
                            Welcome to PerfectPeruse
                        </h1>
                        <p>
                            We would like to welcome you!
                        </p>
                    </div>
                </div>

                <div>
                    <h1>2020 READING CHALLENGE</h1>
                </div>

                <div>
                    <h1>WANT TO READ</h1>
                </div>

                <div>
                    BOOKSHELVES
                    <div>
                        Want to Read 
                    </div>

                    <div>
                        Currently Reading
                    </div>

                    <div>
                        Read
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }


}

export default UsersHome;

