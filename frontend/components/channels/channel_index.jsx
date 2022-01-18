import React from "react";
import ChannelIndexItem from "./channel_index_item";
import { withRouter } from "react-router-dom";
import Chat from "../messages/chat"

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props)

    this.setActiveChannel = this.setActiveChannel.bind(this)
  }

  componentDidMount() {
    this.props.fetchChannels()
    // this.props.history.push(`/channels/1`)
  }
  
  setActiveChannel(e) {
    this.props.history.push(`/channels/${e.target.value}`)
  }

  render() {
    return (
      <>
      <div className='channel-wrap'>
        <h3>Channels</h3>
        <ul>
          <li value={1} onClick={this.setActiveChannel}>
          Troy
          {/* {this.props.channels.map((channel) => (
            <ChannelIndexItem 
              key={this.channel.id}
              channel={channel}
            />  
          ))} */}
          </li> 
          <br />
          <li value={2} onClick={this.setActiveChannel}>
            + Add a new channel 
            {/* <ChannelForm */}
          </li>
        </ul>
      </div>
      <Chat />
      </>
    )
  }
}

export default withRouter(ChannelIndex)