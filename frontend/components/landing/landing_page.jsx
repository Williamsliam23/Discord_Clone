import React from "react";
import { receiveMessages } from "../../actions/message_actions";
import Chat from "../messages/chat";

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    return (
      <div>
        <input type='submit' value='logout' className='logout'></input>
        <div className='side-bar'>
          <div className='server-wrap'></div>
          <div className='channel-wrap'></div>
        </div>
        <Chat />
        <div className='user-holder'></div>
      </div>
    )
  }
}

export default LandingPage