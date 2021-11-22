import React from "react";
import { Route, Routes } from "react-router";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

const App = () => (
  <div>
    <h1>Dischannel new entry</h1>
    <Routes>
      <Route path="/signup" component={SignupFormContainer} />
      <Route path="/login" component={LoginFormContainer} />
    </Routes>
  </div>

)

export default App