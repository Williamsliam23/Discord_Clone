import React from "react";
import ChannelIndexItem from "./channel_index_item";
import { withRouter } from "react-router-dom";
import Chat from "../messages/chat"
import Members from "../users/User";
import CreateChannelContainer from "./create_channel_container";
import UsersListContainer from "../users/users_list_container"

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      server: this.props.match.params.serverId,
      channels: this.props.channels,
      creating: false
    }
    this.creation = this.creation.bind(this)
  }

  componentDidMount(){
    if(this.props.match.params.serverId !== ":serverId"){
    this.props.fetchChannels(this.props.match.params.serverId)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.serverId !== this.props.match.params.serverId) {
      this.props.fetchChannels(this.props.match.params.serverId);
    }
    if(prevProps.channels.length !== this.props.channels.length){
      if(this.props.match.params.serverId !== ":serverId"){
      this.props.fetchChannels(this.props.match.params.serverId);
      }
    }
    if(prevProps.channels.length !== this.props.channels.length){
      this.props.fetchChannels(this.props.match.params.serverId);
    }
  }

  creation(){
    $(function (){
      $(".test").toggleClass("hidden")
    })
  }

  render() {
    if(this.props.match.params.serverId === ":serverId"){
      return (
        <>
        <div className='channel-wrap'>
          <h3 className="selected-server">Select a Server</h3>
          <h4 className="channels-header">Text Channels</h4>
            <CreateChannelContainer server={this.props.match.params.serverId}/>
        </div>
        <Chat />
        </>
      )
    }
    if(Object.values(this.props.activeServer).length === 0){
      return (
        <>
        <div className='channel-wrap'>
          <h3 className="selected-server">Select a Server</h3>
          <h4 className="channels-header">Text Channels</h4>
          <CreateChannelContainer server={this.props.match.params.serverId}/>
        </div>
        <Chat />
        </>
      )
    }
    if(this.props.channels.length === 0){
      return (
        <>
        <div className='channel-wrap'>
          <h3 className="selected-server">{this.props.activeServer.title}</h3>
          <h4 className="channels-header">Text Channels</h4>
          <CreateChannelContainer server={this.props.match.params.serverId}/>
        </div>
        <Chat />
        <UsersListContainer server={this.props.activeServer}/>
        </>
      )
    }
    return (
      <>
      <div className='channel-wrap'>
      <h3 className="selected-server">{this.props.activeServer.title}</h3>
        <h4 className="channels-header">Text Channels</h4>
        <ul>
          {Object.values(this.props.channels).map((channel) => {
            return <ChannelIndexItem 
              key={channel.id}
              channel={channel}
              server={this.props.match.params.serverId}
              className="channel-list-item"
              active={this.props.setActiveChannel}
              deleteChannel={this.props.deleteChannel}
              fetchChannels={this.props.fetchChannels}
              channels={this.props.channels}
            />  
          })}
          <br />

        </ul>
        <CreateChannelContainer server={this.props.match.params.serverId}/>
      </div>
      <Chat />
      <UsersListContainer server={this.props.activeServer}/>
      </>
    )
  }
}

export default withRouter(ChannelIndex)