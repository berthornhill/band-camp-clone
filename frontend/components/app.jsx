import React from "react";
import NavBarContainer from "./header/navbar_container";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
// import SessionContainer from "./session/session_container";

import LoginPage from "./session/login_page_component";
import LoginNav from "./session/login_nav";
// import SplashContainer from "./splash/spash_container";
import Splash from "./splash/splash_component";
import SignupForm from "./session/signup_form_container";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/users/login" component={LoginNav} />
        <Route path="/" component={NavBarContainer} />
      </Switch>

      <Switch>
        <Route exact path="/users/login" component={LoginPage} />
        <Route exact path="/users/signup" component={SignupForm} />

        <Route path="/" component={Splash} />
      </Switch>
    </div>
  );
};

export default App;
