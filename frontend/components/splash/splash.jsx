import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../loginform/loginform';
import SignupForm from '../signupform/signupform';
import Footer from '../footer/footer';




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
            username: "",
            email: "",
            password: ""
        }

        this.demoUser = {
            username: "Casey Lee",
            email: "caseylee@gmail.com",
            password: "123456"
        }
        
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }

    handleDemoUser(e) {
        e.preventDefault();
        const user = this.demoUser;
        this.props.login(user);
    }

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    componentDidMount(){
        this.props.getBooks();
    }

    render() {
        const { currentUser, login, signup} = this.props;
        return (
            <div className="splash">
                <header className="splash-header">
                    <div className="splash-header-mainheader">

                        <div className="splash-header-mainheader-logo">
                            <img src={window.perfectperuseURL}
                                alt="perfectperuse" />
                        </div>
                        <LoginForm
                            currentUser={currentUser}
                            login={login}
                        />                        
                    </div>

                    <div className="splash-header-subheader">
                        <div className="splash-header-subheader-slogan">
                            <img src={window.headlineURL} alt="slogan"/>
                        </div>

                        <div className="splash-header-subheader-signup">
                            <div><SignupForm 
                            currentUser={currentUser}
                            signup={signup}
                            /></div>                            
                            <button className="splash-header-subheader-demouser" onClick={this.handleDemoUser}>Demo User</button>
                        </div>
                    </div>
                </header>

                <main className="splash-main">
                    <div className="splash-main-left">
                        <div className="splash-main-left-top">
                            <div className="splash-main-left-top-a">
                                <h2>Deciding what to read next?</h2>
                                <p>
                                    You’re in the right place. Tell us what titles or 
                                    genres you’ve enjoyed in the past, and we’ll give 
                                    you surprisingly insightful recommendations.
                                </p>
                            </div>

                            <div className="splash-main-left-top-b">
                                <h2>What are your friends reading?</h2>
                                <p>
                                    Chances are your friends are discussing their 
                                    favorite (and least favorite) books on Goodreads.
                                </p>
                            </div>
                        </div>

                        <div className="splash-main-discover">
                            <h2>What will <span>you</span> discover?</h2>
                            <div className="splash-main-discover-brianlikes">
                                <div className="splash-main-discover-brianlikes-topline">
                                    <div>
                                        Because Brian liked…
                                    </div>
                                    <div>
                                        He discovered:
                                    </div>
                                </div>
                                <Link to={`/books/7`}></Link>
                                
                                <div className="splash-main-discover-booklinks">
                                    <Link to={`/books/2`}><img src={window.harrypotterURL} 
                                    alt="Harry Potter and the Sorcerer's Stone" /></Link>

                                    <Link to={`/books/3`}><img src={window.agameofthronesURL}
                                        alt="A Game of Thrones" /></Link>

                                    <Link to={`/books/6`}><img src={window.awizardofearthseaURL}
                                        alt="A Wizard of Earthsea" /></Link>

                                    <Link to={`/books/13`}><img src={window.theemperorssoulURL}
                                        alt="The Emperors Soul" /></Link>

                                    <img className="arrow" src={window.discoveryarrowURL}
                                        alt="arrow"/>

                                    <Link to={`/books/5`}><img src={window.thenameofthewindURL}
                                        alt="The Name of the Wind" /></Link>
                                    <div>
                                        Fantasy
                                    </div>
                                </div>
                            </div>

                            <div className="splash-main-discover-deborahlikes">
                                <div className="splash-main-discover-deborahlikes-topline">
                                    <div>
                                        Because Deborah liked…
                                    </div>
                                    <div>
                                        She discovered:
                                    </div>
                                </div>

                                <div className="splash-main-discover-booklinks">
                                    <Link to={`/books/4`}><img src={window.endersgameURL}
                                        alt="Enders Game" /></Link>

                                    <Link to={`/books/12`}><img src={window.a2001URL}
                                        alt="2001" /></Link>

                                    <Link to={`/books/11`}><img src={window.foundationURL}
                                        alt="Foundation" /></Link>

                                    <Link to={`/books/10`}><img src={window.a112263URL}
                                        alt="11/22/63" /></Link>

                                    <img className="arrow" src={window.discoveryarrowURL}
                                        alt="arrow" />

                                    <Link to={`/books/14`}><img src={window.duneURL}
                                        alt="Dune" /></Link>

                                    <div>
                                        Science Fiction
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                    </div>

                    <div className="splash-main-right">

                    </div>
                </main>
                <Footer/>
            </div>
            
        )
        
    }
}

export default Splash;
