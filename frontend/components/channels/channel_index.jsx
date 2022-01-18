import React from "react";
import ChannelIndexItem from "./channel_index_item";
import { withRouter } from "react-router-dom";
import Chat from "../messages/chat"
import CreateChannelContainer from "./create_channel_container";

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      channels: this.props.fetchChannels()
    }
    this.setActiveChannel = this.setActiveChannel.bind(this)
  }

  componentDidMount(){
    this.props.fetchChannels()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.channels.length !== this.props.channels.length){
      this.props.fetchChannels()
    }
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
          {Object.values(this.props.channels).map((channel) => {
            return <ChannelIndexItem 
              key={channel.id}
              channel={channel}
            />  
          })}
          <br />
            <CreateChannelContainer />

        </ul>
      </div>
      <Chat />
      </>
    )
  }
}

export default withRouter(ChannelIndex)