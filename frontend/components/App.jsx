import React from "react";
import { Route, Routes } from "react-router";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute } from "../util/route_util";

const App = () => (
  <div>
    <h1>Dischannel new entry</h1>
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <Route>
    </Route>
  </div>

)

export default App