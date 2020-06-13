import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import NavbarContainer from '../navbar/navbar_container';



class UsersHome extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    componentDidMount(){
        this.props.getBookshelves(this.props.sessionId);
    }

    render(){
        const {currentUser, logout} = this.props
        return(
            <div className="usershome">
                <NavbarContainer/>
                <br />
                <br />          
                <br />
                <br />
                {/* <h1>Hello, {this.props.currentUser.username}</h1> */}
                <button onClick={this.handleLogout}>Log out</button>
                <main className="usershome-main">
                <div className="usershome-main-left">

                    <div className="usershome-main-left-currentlyreading">
                        <h1>CURRENTLY READING</h1>
                        <Link to={`/books/27`}><img src={window.ofmiceandmenURL}
                            alt="Of Mice and Men" /></Link>
                         
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
                            <br/>
                            <p>
                                We would like to welcome you!
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus. Porttitor rhoncus dolor purus non enim praesent elementum. Vitae aliquet nec ullamcorper sit amet risus. Iaculis eu non diam phasellus vestibulum lorem sed risus. At urna condimentum mattis pellentesque id nibh. Iaculis nunc sed augue lacus viverra vitae congue. Varius vel pharetra vel turpis. Dolor purus non enim praesent. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Tempor orci eu lobortis elementum nibh tellus molestie. Sagittis orci a scelerisque purus semper eget duis at. Suspendisse potenti nullam ac tortor vitae. Duis at consectetur lorem donec massa sapien faucibus. Etiam non quam lacus suspendisse faucibus interdum posuere. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. At quis risus sed vulputate odio. Ac orci phasellus egestas tellus rutrum. Ut venenatis tellus in metus vulputate.

                            </p>
                            <br/>
                            <p>
                                Neque vitae tempus quam pellentesque nec nam aliquam sem. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sed blandit libero volutpat sed. Ultricies mi eget mauris pharetra et ultrices neque ornare. Convallis posuere morbi leo urna molestie at elementum eu. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Sagittis eu volutpat odio facilisis mauris sit. Ac ut consequat semper viverra nam libero. Vitae justo eget magna fermentum iaculis eu non. Tristique nulla aliquet enim tortor at auctor urna nunc. Amet nisl suscipit adipiscing bibendum. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Vulputate dignissim suspendisse in est ante in nibh. Risus feugiat in ante metus dictum at tempor commodo. Integer eget aliquet nibh praesent tristique magna sit amet purus. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit.
                            </p>     
                        </div>
                        <br/>
                        <div className="usershome-main-right-updates-2">
                                <h1>Verify your Email!</h1>
                                <p>
                                    Please verify your email!
                                </p>
                                <br/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus. Porttitor rhoncus dolor purus non enim praesent elementum. Vitae aliquet nec ullamcorper sit amet risus. Iaculis eu non diam phasellus vestibulum lorem sed risus. At urna condimentum mattis pellentesque id nibh. Iaculis nunc sed augue lacus viverra vitae congue. Varius vel pharetra vel turpis. Dolor purus non enim praesent. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Tempor orci eu lobortis elementum nibh tellus molestie. Sagittis orci a scelerisque purus semper eget duis at. Suspendisse potenti nullam ac tortor vitae. Duis at consectetur lorem donec massa sapien faucibus. Etiam non quam lacus suspendisse faucibus interdum posuere. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. At quis risus sed vulputate odio. Ac orci phasellus egestas tellus rutrum. Ut venenatis tellus in metus vulputate.
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

