import React from 'react';
import { Link } from 'react-router-dom';


class ReviewCreate extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.getBooks();
    }
    render() {
       
            if(Object.keys(this.books).length > 0){
                return(  
                    <div>
                        <div>{this.props.bookId}</div>
                    </div>
                )
            }else{
                return(
                    <div>
                        Nothing to see here!
                    </div>
                )
            }
           
    }
}

export default ReviewCreate;

