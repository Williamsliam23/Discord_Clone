import React from "react";
import ChannelIndexItem from "./channel_index_item";
import { withRouter } from "react-router-dom";
import Chat from "../messages/chat"

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.setActiveChannel = this.setActiveChannel.bind(this)
  }
  
  setActiveChannel(e) {
    this.props.history.push(`/channels/${e.target.value}`)
  }

  render() {
    if(this.props.channels.length === 0){
      return null
    }
    return (
      <>
      <div className='channel-wrap'>
        <h3>Channels</h3>
        <ul>
          <li value={1} onClick={this.setActiveChannel}>
          Troy
          {Object.values(this.props.channels).map((channel) => (
            <ChannelIndexItem 
              key={this.channel.id}
              channel={channel}
            />  
          ))}
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