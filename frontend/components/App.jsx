import React from "react";
import { Route } from "react-router";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute } from "../util/route_util";
import {HashRouter, Switch} from "react-router-dom"
import Greet from "./greeting"
import topNav from "./landing/top_nav";
import Chat from "./messages/chat";
import LandingPage from "./landing/landing_page";

const App = () => (
  <div>
    <Switch>
    <AuthRoute path="/app" component={LandingPage} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/" component={Greet}/>
    </Switch>
  </div>

)

export default App