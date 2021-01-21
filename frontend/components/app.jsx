import React from "react";
import Header from "./header/header_component";
import { Route, Switch } from "react-router-dom";
// import SessionContainer from "./session/session_container";

const App = () => {
  return (
    <div>
      <h1>Bandlamp: Spotlight On Your Favorite Music.</h1>
      <Header />
      <Switch>{/* <Route path="/"></Route> */}</Switch>
    </div>
  );
};

export default App;
