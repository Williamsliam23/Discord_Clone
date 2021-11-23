import React from "react";
import ReactDOM from "react-dom";
import { login, signup, logout } from "./util/session_api_util";
import configureStore from "./store/store"
import Root from "./components/root"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  
  
  // const store = configureStore()
  let store;
  // window.getState = store.getState
  // window.dispatch = store.dispatch
  // window.login = login
  // window.logout = logout
  // window.signup = signup

if (window.currentUser) {
  const preloadedState = {
    entities: {
      users: { [window.currentUser.id]: window.currentUser }
    },
    session: { id: window.currentUser.id }
  };
  store = configureStore(preloadedState);
  delete window.currentUser;
} else {
  store = configureStore();
}

//testing state and actions
window.getState = store.getState
  window.dispatch = store.dispatch
  window.login = login
  window.logout = logout
  window.signup = signup

  ReactDOM.render(<Root store={store} />, root);
});