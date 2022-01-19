import React from "react";
import { receiveMessages } from "../../actions/message_actions";
import ChannelIndex from "../channels/channel_index";
import Channel from "../channels/Channel"
import ServerIndex from "../servers/server_index";
import Members from "../users/User";

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.props.fetchChannels()
  }

  componentDidMount() {
    this.props.fetchChannels()
  }

  render() {

    return (
      <>
        <div className='landing'>
          <div className='side-bar'>
            <ServerIndex />
            <Channel />
            <Members />
          </div>
        </div>
      </>
    )
  }
}

export default LandingPage