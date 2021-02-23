import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import * as sessionUtil from "./util/session_api_util"; //testing
import * as sessionActions from "./actions/session_actions"; //testing

document.addEventListener("DOMContentLoaded", () => {
  window.sessionUtil = sessionUtil;
  window.sessionActions = sessionActions; //testing
  window.store = configureStore(); //testing

  let prelodedState = undefined;
  let store;
  if (window.currentUser) {
    debugger;
    prelodedState = {
      entities: {
        users: window.currentUser.user,
      },
      session: window.currentUser.session,
    };
    delete window.currentUser;
    store = configureStore(prelodedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
