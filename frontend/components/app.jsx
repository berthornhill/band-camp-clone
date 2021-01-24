import React from "react";
import NavBarContainer from "./header/navbar_container";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
// import SessionContainer from "./session/session_container";

import LoginForm from "./session/login_form_container";
import LoginNav from "./session/login_nav";
// import SplashContainer from "./splash/spash_container";
import Splash from "./splash/splash_component";
import SignupForm from "./session/signup_form_container";
import { AuthRoute } from "../util/route_util";
import Modal from "./modal/modal_container";

const App = () => {
  return (
    <div>
      <Modal />
      <Switch>
        <Route exact path="/users/login" component={LoginNav} />
        <Route exact path="/users/signup" component={LoginNav} />
        <Route path="/" component={NavBarContainer} />
      </Switch>

      <Switch>
        <AuthRoute exact path="/users/login" component={LoginForm} />
        <AuthRoute exact path="/users/signup" component={SignupForm} />

        <Route path="/" component={Splash} />
      </Switch>
    </div>
  );
};

export default App;
