import React from 'react';
import { Link } from 'react-router-dom';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {
        const { currentUser, login } = this.props;
        return (
            <form className="splash-header-mainheader-loginform" onSubmit={this.handleLogin}>

                    <input type="email"
                        placeholder="Email address"
                        value={this.state.email}
                        onChange={this.update('email')}
                    />

                    <input type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        pattern=".{6,}" 
                        title="Password must be 6 character or more!"
                    />

                    <input className="splash-header-mainheader-loginform-submit" type="submit" value="Sign in" />
            </form>
        )
    }
}

export default LoginForm;
