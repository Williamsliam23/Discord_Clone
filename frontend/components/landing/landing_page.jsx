import React from "react";
import { receiveMessages } from "../../actions/message_actions";
import ChannelList from "../channels/channel_list";
import Chat from "../messages/chat";
import ServerList from "../servers/server_list";
import UserList from "../users/users_list";
import TopNav from "./top_nav";

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    return (
      <>
      <TopNav />
        <div className='landing'>
          <div className='side-bar'>
            <ServerList />
            <ChannelList />
          </div>
          <Chat />
          <UserList />
        </div>
      </>
    )
  }
}

export default LandingPage