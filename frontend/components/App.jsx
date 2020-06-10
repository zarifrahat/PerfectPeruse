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

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/" component={SplashContainer} /> 
            <ProtectedRoute exact path="/user" component={usersHomeContainer} /> 
            {/* <Route path='/books' component={BookContainer} /> */}
            <Route path='/books/:bookId' component={BookContainer} />
        </Switch>

    </div>
);

export default App;