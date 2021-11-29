import React from "react";
import { Route } from "react-router";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute } from "../util/route_util";
import {HashRouter} from "react-router-dom"
import Greet from "./greeting"
import topNav from "./landing/top_nav";

const App = () => (
  <div>
    <HashRouter>
    {/* <AuthRoute path="/" component={topNav}/> */}
    <AuthRoute path="/" component={Greet}/>
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    </HashRouter>
    <h1>Dischannel new entry</h1>
    <input type='submit' value='logout' className='logout'></input>
  </div>

)

export default App