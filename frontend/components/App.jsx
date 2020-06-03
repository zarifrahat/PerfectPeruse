import React from "react";
import SplashContainer from "./splash/splash_container";
import {AuthRoute} from "../util/route_util"

const App = () => (
    <div>
        <AuthRoute exact path="/" component={SplashContainer} /> 
    </div>
);

export default App;