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
  }

  componentDidMount(){
    this.props.fetchChannels()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.channels.length !== this.props.channels.length){
      this.props.fetchChannels()
    }
  }

  render() {
    if(this.props.channels.length === 0){
      return null
    }
    return (
      <>
      <div className='channel-wrap'>
      <h3 className="selected-server">Selected Server</h3>
        <h4 className="channels-header">Text Channels</h4>
        <ul>
          {Object.values(this.props.channels).map((channel) => {
            return <ChannelIndexItem 
              key={channel.id}
              channel={channel}
              className="channel-list-item"
            />  
          })}
          <br />

        </ul>
        <CreateChannelContainer />
      </div>
      <Chat />
      </>
    )
  }
}

export default withRouter(ChannelIndex)