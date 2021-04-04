import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  let prelodedState = undefined;
  let store;
  if (window.currentUser) {
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
