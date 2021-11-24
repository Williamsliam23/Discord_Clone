import React from "react";
import { Route } from "react-router";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute } from "../util/route_util";
import {HashRouter} from "react-router-dom"
import Greet from "./greeting"

const App = () => (
  <div>
    <input type='submit' value='logout' className='logout'></input>
    <HashRouter>
    <AuthRoute path="/" component={Greet}/>
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    </HashRouter>
    <h1>Dischannel new entry</h1>
  </div>

)

export default App