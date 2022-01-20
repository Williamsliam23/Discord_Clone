import React from "react";
import ChannelIndexItem from "./channel_index_item";
import { withRouter } from "react-router-dom";
import Chat from "../messages/chat"
import CreateChannelContainer from "./create_channel_container";

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      server: this.props.match.params.serverId,
      channels: this.props.channels
    }
  }

  componentDidMount(){
    this.props.fetchChannels(this.props.match.params.serverId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.serverId !== this.props.match.params.serverId) {
      this.props.fetchChannels(this.props.match.params.serverId);
    }
  }

  render() {
    if(this.props.channels.length === 0){
      return (
        <>
        <div className='channel-wrap'>
          <h3 className="selected-server">Selected Server</h3>
          <CreateChannelContainer server={this.props.match.params.serverId}/>
        </div>
        <Chat />
        </>
      )
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
              server={this.props.match.params.serverId}
              className="channel-list-item"
            />  
          })}
          <br />

        </ul>
        <CreateChannelContainer server={this.props.match.params.serverId}/>
      </div>
      <Chat />
      </>
    )
  }
}

export default withRouter(ChannelIndex)