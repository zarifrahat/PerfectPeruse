import React from "react";
import {AuthRoute, ProtectedRoute} from "../util/route_util"
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import SplashContainer from "./splash/splash_container";
import usersHomeContainer from "./usersHome/usersHome_container";
import BookContainer from "./books/book_container";
import MyBooksContainer from "./bookshelves/mybooks_container";
import AllBooksContainer from "./allBooks/allBooks_container";
import ReviewCreateContainer from "./reviewCreate/reviewCreate_container";
import ReviewEditContainer from "./reviewEdit/reviewEdit_container";

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/" component={SplashContainer} /> 
            <ProtectedRoute exact path="/user" component={usersHomeContainer} /> 
            <ProtectedRoute exact path="/allbooks" component={AllBooksContainer} /> 
            <ProtectedRoute exact path="/mybooks" component={MyBooksContainer} /> 
            <ProtectedRoute exact path="/books/:bookId/review/create" component={ReviewCreateContainer} /> 
            <ProtectedRoute exact path="/books/:bookId/review/edit" component={ReviewEditContainer} /> 
            {/* <Route path='/books' component={BookContainer} /> */}
            <Route path='/books/:bookId' component={BookContainer} />
        </Switch>

    </div>
);

export default App;