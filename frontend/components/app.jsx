import React from "react";
import NavBarContainer from "./header/navbar_container";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
// import SessionContainer from "./session/session_container";

import LoginForm from "./session/login_form_container";
import LoginNav from "./session/login_nav";
// import SplashContainer from "./splash/spash_container";
import Splash from "./splash/splash_component";
import SignupForm from "./session/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Modal from "./modal/modal_container";
import Footer from "./footer/footer";
import ArtistShow from "./artist/artist_show_container";
import UserShow from "./users/user_show_container";
import SearchResults from "./search_page/search_results_container";
import Tags from "./tags/tags_container";

const App = () => {
  return (
    <div>
      <Modal />
      <Switch>
        <Route path="/users/login" component={LoginNav} />
        <Route path="/users/signup" component={LoginNav} />
        <Route path="/" component={NavBarContainer} />
      </Switch>

      <Switch>
        <AuthRoute path="/users/login" component={LoginForm} />
        <AuthRoute path="/users/signup" component={SignupForm} />
        <ProtectedRoute path="/users/:id" component={UserShow} />
        <Route path="/artist/:id" component={ArtistShow} />
        <Route path="/search" component={SearchResults} />
        <Route path="/tags/:tag" component={Tags} />

        <Route path="/" component={Splash} />
      </Switch>

      <Footer />
    </div>
  );
};

export default App;
