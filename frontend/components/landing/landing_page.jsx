import React from "react";
import { receiveMessages } from "../../actions/message_actions";
import ChannelIndex from "../channels/channel_index";
import Channel from "../channels/Channel"
import Servers from "../servers/Server";
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
            <Servers />
            <Members />
          </div>
        </div>
      </>
    )
  }
}

export default LandingPage