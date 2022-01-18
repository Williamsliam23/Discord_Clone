import React from "react";
import { Route } from "react-router";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import {HashRouter, Switch, Router} from "react-router-dom"
import Greet from "./greeting"
import topNav from "./landing/top_nav";
import Chat from "./messages/chat";
import LandingPageContainer from "./landing/landing_page_container";

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute path="/app" component={LandingPageContainer} />
      <ProtectedRoute path="/channels/:channelId" component={LandingPageContainer}/>
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <Route path="/" component={Greet}/>
    </Switch>
  </div>

)

export default App