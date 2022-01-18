import React from "react";
import ChannelIndexItem from "./channel_index_item";
import { withRouter } from "react-router-dom";
import Chat from "../messages/chat"

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props)
    this.setActiveChannel = this.setActiveChannel.bind(this)
  }
  
  setActiveChannel(e) {
    console.log(e.target.value)
    this.props.history.push(`/channels/${e.target.value}`)
  }

  render() {
    if(this.props.channels.length === 0){
      return null
    }
    console.log(Object.values(this.props.channels))
    return (
      <>
      <div className='channel-wrap'>
        <h3>Channels</h3>
        <ul>
          {Object.values(this.props.channels).map((channel) => {
            {console.log(channel.id)}
            return <ChannelIndexItem 
              // value={channel.id}
              key={channel.id}
              channel={channel}
            />  
          })}
          <br />
            {/* <ChannelForm */}

        </ul>
      </div>
      <Chat />
      </>
    )
  }
}

export default withRouter(ChannelIndex)