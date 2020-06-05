import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../loginform/loginform';
import SignupForm from '../signupform/signupform';



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

        this.demoUser = {
            name: "Casey Lee",
            email: "caseylee@gmail.com",
            password: "1234567"
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
    render() {
        const { currentUser, login, signup} = this.props;
        return (
            <div className="splash">
                <img className="splash-background" src={window.masthead_backgroundURL}
                        alt="background" />
                <header className="splash-header">
                    <div className="splash-header-mainheader">

                        <div className="splash-header-mainheader-logo">
                            <img src={window.perfectperuseURL}
                                alt="perfectperuse" />
                        </div>
                        <div><LoginForm
                            currentUser={currentUser}
                            login={login}
                        /></div>                           
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
                               
                                
                                <div className="splash-main-discover-booklinks">
                                    <img src={window.harrypotterURL} 
                                    alt="Harry Potter and the Sorcerer's Stone" />

                                    <img src={window.agameofthronesURL}
                                        alt="A Game of Thrones" />

                                    <img src={window.awizardofearthseaURL}
                                        alt="A Wizard of Earthsea" />

                                    <img src={window.theemperorssoulURL}
                                        alt="The Emperors Soul" />

                                    <img className="arrow" src={window.discoveryarrowURL}
                                        alt="arrow"/>

                                    <img src={window.thenameofthewindURL}
                                        alt="The Name of the Wind" />
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
                                    <img src={window.endersgameURL}
                                        alt="Enders Game" />

                                    <img src={window.a2001URL}
                                        alt="2001" />

                                    <img src={window.foundationURL}
                                        alt="Foundation" />

                                    <img src={window.a112263URL}
                                        alt="11/22/63" />

                                    <img className="arrow" src={window.discoveryarrowURL}
                                        alt="arrow" />

                                    <img src={window.duneURL}
                                        alt="Dune" />

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

                <footer className="splash-footer">
                    <div className="splash-footer-company">
                        <h3>COMPANY</h3>
                        <ul>
                            <li>
                                <a href="https://www.goodreads.com/about/us">About us</a>
                            </li>
                            <li>
                                <a href="https://www.goodreads.com/jobs">Careers</a>
                            </li>
                            <li>
                                <a href="https://www.goodreads.com/about/terms">Terms</a>                                
                            </li>
                            <li>
                                <a href="https://www.goodreads.com/about/privacy">Privacy</a>                                
                                
                            </li>
                            <li>
                                <a href="https://help.goodreads.com/">Help</a>                                
                            </li>
                        </ul>
                    </div>


                    <div className="splash-footer-workwithus">
                        <h3>WORK WITH US</h3>
                        <ul>
                            <li>
                                <a href="https://www.goodreads.com/author/program">Authors</a>
                            </li>
                            <li>
                                <a href="https://www.goodreads.com/advertisers">Advertise</a>
                            </li>
                            <li>
                                <a href="https://www.goodreads.com/news?content_type=author_blogs">Authors &amp; ads blog</a>
                            </li>
                            <li>
                                <a href="https://www.goodreads.com/api">API</a>

                            </li>
                        </ul>
                    </div>

                    <div className="splash-footer-connect">
                        <h3>CONNECT</h3>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/Goodreads/">
                                    <img src={window.facebookURL}
                                        alt="Facebook" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/goodreads">
                                    <img src={window.twitterURL}
                                        alt="Twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/goodreads/">
                                        <img src={window.instagramURL}
                                            alt="Instagram" />
                                </a>
                            </li>
                            <li>
                                
                                <a href="https://www.linkedin.com/company/goodreads-com/">
                                    <img src={window.linkedinURL}
                                        alt="Linkedin" />
                                </a>
                            </li>
                        </ul>
                    </div>


                    <div className="splash-footer-misc">
                        <div>
                            <ul>
                                <li>
                                    <a href="https://itunes.apple.com/app/apple-store/id355833469?pt=325668&ct=mw_footer&mt=8">
                                        <img src={window.applestoreURL}
                                            alt="Apple Play Store" />
                                    </a>
                                    <a href="https://play.google.com/store/apps/details?id=com.goodreads&utm_source=mw_footer&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                                        <img src={window.googleplayURL}
                                            alt="Google Store" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <ul>
                            <li>
                                © 2020 Goodreads, Inc.
                            </li>
                            <li>
                                <a href="https://www.goodreads.com/toggle_mobile">Mobile version</a>
                            </li>
                        </ul>
                    </div>

                </footer>
            </div>
            
        )
        
    }
}

export default Splash;
