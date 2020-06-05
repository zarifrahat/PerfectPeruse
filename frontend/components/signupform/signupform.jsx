import React from 'react';
import { Link } from 'react-router-dom';


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        }
        this.handleSignup = this.handleSignup.bind(this);
    }

    handleSignup(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {
        const { currentUser, signup } = this.props;
        return (
            <form className="splash-header-subheader-signup-form"
                onSubmit={this.handleSignup}>
                <label className="splash-header-subheader-signup-form-label">
                    New here? Create a free account!
                                </label>
                <input type="text"
                    placeholder="Name"
                    value={this.state.username}
                    onChange={this.update('username')}
                    // pattern=".{3,}"
                    title="Must enter your name!"
                    required
                />
                <input type="email"
                    placeholder="Email address"
                    value={this.state.email}
                    onChange={this.update('email')}
                    required
                />
                <input type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    pattern=".{6,}" 
                    title="Password must be 6 character or more!"
                    required
                />
                <div className="splash-header-subheader-signup-form-paragraph">
                    <input className="splash-header-subheader-signup-form-submit" type="submit" value="Sign up" />
                    <p>By clicking “Sign up” I agree to the PerfectPeruse Terms of Service and confirm that I am at least 13 years old.</p>
                </div>
            </form>

        )
    }
}

export default SignupForm;