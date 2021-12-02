import React from "react";
import ReactDOM from "react-dom";
import { login, signup, logout } from "./util/session_api_util";
import configureStore from "./store/store"
import Root from "./components/root"
import { createMessage, fetchMessage } from "./util/message_api_util";

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

//testing state and actions/util
window.getState = store.getState
  window.dispatch = store.dispatch
  window.login = login
  window.logout = logout
  window.signup = signup
  window.fetchMessage = fetchMessage
  window.createMessage = createMessage

  ReactDOM.render(<Root store={store} />, root);
});