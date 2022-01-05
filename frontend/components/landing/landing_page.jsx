import React from "react";
import { receiveMessages } from "../../actions/message_actions";
import ChannelIndex from "../channels/channel_index";
import Chat from "../messages/chat";
import ServerList from "../servers/server_list";
import UserList from "../users/users_list";
import TopNav from "./top_nav_container";

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    return (
      <>
      <div className='title'>
        <h1>Dischannel</h1>
      <TopNav />
      </div>
        <div className='landing'>
          <div className='side-bar'>
            <ServerList />
            <ChannelIndex />
          </div>
          <Chat />
          <UserList />
        </div>
      </>
    )
  }
}

export default LandingPage