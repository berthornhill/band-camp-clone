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
  const store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
