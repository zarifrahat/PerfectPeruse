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
            <div className="splash">
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
                            <form className="splash-header-subheader-signup-form"
                            onClick={this.handleSubmit}>
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

                <main className="splash-main">
                    <div className="splash-main-left">
                        <div className="splash-main-left-left">
                            <h2>Deciding what to read next?</h2>
                            <p>
                                You’re in the right place. Tell us what titles or 
                                genres you’ve enjoyed in the past, and we’ll give 
                                you surprisingly insightful recommendations.
                            </p>
                        </div>

                        <div className="splash-main-left-right">
                            <h2>What are your friends reading?</h2>
                            <p>
                                Chances are your friends are discussing their 
                                favorite (and least favorite) books on Goodreads.
                            </p>
                        </div>

                        <div className="splash-main-discover">
                            <h2>What will you discover?</h2>
                            <div className="splash-main-discover-brianlikes">
                                <p>
                                    Because Brian liked…
                                </p>
                                <p>
                                    He discovered:
                                </p>
                                <div className="splash-main-discover-booklinks">
                                    <img src={window.harrypotterURL} 
                                    alt="Harry Potter and the Sorcerer's Stone" />

                                    <img src={window.agameofthronesURL}
                                        alt="A Game of Thrones" />

                                    <img src={window.thewayofkingsURL}
                                        alt="The Way of Kings" />

                                    <img src={window.theemperorssoulURL}
                                        alt="The Emperors Soul" />

                                    <img src={window.thenameofthewindURL}
                                        alt="The Name of the Wind" />
                                </div>
                            </div>

                            <div className="splash-main-discover-deborahlikes">
                                <p>
                                    Because Deborah liked…
                                </p>
                                <p>
                                    She discovered:
                                </p>
                                <div className="splash-main-discover-booklinks">
                                    <img src={window.endersgameURL}
                                        alt="Harry Potter and the Sorcerer's Stone" />

                                    <img src={window.a2001URL}
                                        alt="A Game of Thrones" />

                                    <img src={window.foundationURL}
                                        alt="The Way of Kings" />

                                    <img src={window.a112263URL}
                                        alt="The Emperors Soul" />

                                    <img src={window.duneURL}
                                        alt="The Name of the Wind" />
                                </div>
                            </div>
                            
                        </div>

                    </div>

                    <div className="splash-main-right">

                    </div>
                </main>

                <footer className="splash-footer">
                    <div>
                        <h3>COMPANY</h3>
                        <ul>
                            <li>
                                About us
                            </li>

                            <li>
                                Careers
                            </li>

                            <li>
                                Terms
                            </li>

                            <li>
                                Privacy
                            </li>

                            <li>
                                Help
                            </li>
                        </ul>
                    </div>

                </footer>
            </div>
            
        )
        
    }
}

export default Splash;
