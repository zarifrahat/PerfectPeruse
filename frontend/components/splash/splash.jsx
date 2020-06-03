import React from 'react';
import { Link } from 'react-router-dom';

/*
Export a `PostShow` presentational component that renders a post's information
(title and body). This component should receive the `post` from the store as 
props via its container and fetch it once it has successfully mounted to the 
DOM. Additionally, this component should contain a link back to the `PostIndex`.
*/

class Splash extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user)
    }

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
    }
    render() {
        const { currentUser, login} = this.props;
        return (
            <div className="splash-main">
                <header className="splash-header">
                    <div className="splash-header-mainheader">

                        <div className="splash-header-mainheader-logo">
                            perfectperuse
                        </div>

                        <form className="splash-header-mainheader-loginform" onSubmit={this.handleSubmit}>
                            <label>
                                <input type="text" 
                                placeholder="Email address"
                                value={this.state.email}
                                onChange={this.update('email')}
                                />
                            </label>

                            <label>
                                    <input type="password" 
                                    placeholder="Password" 
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    />
                            </label>
                            
                            <input type="submit" value="Sign in"/>
                        </form>
                    </div>

                    <div className="splash-header-subheader">
                        <div className="splash-header-subheader-slogan">
                            <img src={window.headlineURL} alt="slogan"/>
                        </div>

                        <div className="splash-header-subheader-signup">
                            <form onClick={this.handleSubmit}>
                                <label>New here? Create a free account!</label>
                                <input type="text" 
                                        placeholder="Name"
                                        value={this.state.name}
                                        onChange={this.update('name')}
                                />
                                <input type="text"
                                    placeholder="Email address"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                />
                                <input type="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                                <input type="submit" value="Sign up"/>
                            </form>
                        </div>
                    </div>

                </header>


            </div>
            
        )
        
    }
}

export default Splash;
