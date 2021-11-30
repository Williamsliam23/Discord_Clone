import React from "react";
import { receiveMessages } from "../../actions/message_actions";
import Chat from "../messages/chat";

class LandingPage extends React.Component {
  constructor() {

  }
  render() {
    console.log("does it render")
    return (
      <div>

        <Chat />
        {receiveMessages()}
      </div>
    )
  }
}

export default LandingPage