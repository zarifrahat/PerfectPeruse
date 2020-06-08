import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';



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
        const {currentUser, logout} = this.props
        return(
            <div className="usershome">
                <Navbar
                    currentUser={currentUser}
                    logout={logout}
                />
                <br />
                <br />          
                <br />
                <br />
                <h1>Hello, {this.props.currentUser.username}</h1>
                <button onClick={this.handleLogout}>Log out</button>
                <main className="usershome-main">
                <div className="usershome-main-left">

                    <div className="usershome-main-left-currentlyreading">
                        <h1>CURRENTLY READING</h1>
                        <img src={window.ofmiceandmenURL}
                            alt="Of Mice and Men" />  
                            <div>
                                <p>Of Mice and Men</p>
                                <p>By John Steinbeck</p>
                            </div>
                    </div>

                    <div className="usershome-main-left-challenge">
                        <h1>2020 READING CHALLENGE</h1>
                            <img src={window.readingchallengeURL}
                                alt="2020 Reading Challenge" />  
                    </div>

                    <div className="usershome-main-left-wanttoread">
                        <h1>WANT TO READ</h1>
                    </div>

                    <div className="usershome-main-left-bookshelves">
                        <h1>BOOKSHELVES</h1>
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

                </div>

                <div className="usershome-main-right">
                   <div className="usershome-main-right-updates">
                        <div className="usershome-main-right-updates-1">
                            <h1>
                                Welcome to PerfectPeruse
                            </h1>
                            <p>
                                We would like to welcome you!
                            </p>
                        </div>
                    </div>

                </div>
            </main>
                <Footer/>
            </div>
        )
    }


}

export default UsersHome;

