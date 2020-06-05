import React from 'react';
import { Link } from 'react-router-dom';

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
            <div>
                <h1>Hello, {this.props.currentUser.username}</h1>
                <button onClick={this.handleLogout}>Log out</button>
            </div>
        )
    }


}

export default UsersHome;

