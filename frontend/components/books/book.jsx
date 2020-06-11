import React from 'react';
import { Link } from 'react-router-dom';
import NavbarNotLoggedinContainer from '../navbarNotLoggedin/navbarNotLoggedin_container';
import NavbarContainer from '../navbar/navbar_container';


class Book extends React.Component{
    constructor(props){
        super(props);
        this.book = {}

    }
    componentDidMount(){
        this.props.getBooks();
    }

    render(){
        let applicableNavbar;
        if (!this.props.sessionId) {
            applicableNavbar = <NavbarNotLoggedinContainer />
        } else {
            applicableNavbar = <NavbarContainer/>
        }
        
        if(this.props.book){
            const { book } = this.props;
            return(
                <div className="bookshow">
                    <div>{applicableNavbar}</div>
                    
                    <div className="bookshow-info">
                        <div className="bookshow-info-img">
                            <img src={book.photoUrl}
                                alt={book.title} />
                        </div>

                        <div className="bookshow-info-text">
                            <h1>
                                {book.title}
                            </h1>
                            <h2>
                                by {book.author}
                            </h2>
                            <p>
                                {book.summary}
                            </p>
                            
                        </div>

                    </div>

                    <div className="bookshow-reviews">
                        <h1>COMMUNITY REVIEWS</h1>
                        <div className="bookshow-reviews-tempreview">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus euismod quis viverra nibh. Consequat mauris nunc congue nisi vitae suscipit. Id volutpat lacus laoreet non. Pharetra convallis posuere morbi leo urna. Elementum tempus egestas sed sed risus. Quam viverra orci sagittis eu volutpat odio facilisis. Nisl rhoncus mattis rhoncus urna. Lacus sed viverra tellus in hac habitasse platea dictumst. Maecenas accumsan lacus vel facilisis volutpat. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Sed enim ut sem viverra aliquet eget sit amet. Porttitor leo a diam sollicitudin tempor id eu nisl. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Cum sociis natoque penatibus et magnis dis. Quis blandit turpis cursus in hac habitasse platea.
                            </p>

                        </div>
                    </div>

                </div>
            )
        } else{
            return null;
        }
     
    }

}

export default Book;