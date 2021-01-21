import React from "react";
import HeaderContainer from "./header/header_container";
import { Route, Switch } from "react-router-dom";
// import SessionContainer from "./session/session_container";

import LoginPage from "./session/login_page_component";
// import SplashContainer from "./splash/spash_container";
import Splash from "./splash/splash_component";
import SignupForm from "./session/signup_form_container";

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <Switch>
        <Route exact path="/users/login" component={LoginPage} />
        <Route exact path="/users/signup" component={SignupForm} />
        {/* <Route to="/" component={SplashContainer} /> */}
        <Route path="/" component={Splash} />
      </Switch>
    </div>
  );
};

export default App;
