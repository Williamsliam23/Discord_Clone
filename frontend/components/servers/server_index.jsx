import React from "react";
import ServerIndexItem from "./server_index_item"
import Channel from "../channels/Channel"
import Chat from "../messages/chat"
import CreateChannelContainer from "../channels/create_channel_container";
import { withRouter } from "react-router-dom"
import CreateServerContainer from "./create_server_container";

class ServerIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.fetchServers()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.servers.length !== this.props.servers.length){
      this.props.fetchServers()
    }
  }
  render() {
    if(this.props.servers.length === 0){
      return (
        <h1>
          Loading...
        </h1>
      )
    }

    if(this.props.match.params.serverId === ":serverId"){
      return(
        <>
          <div className='server-wrap'>
            <h3>Servers</h3>
            <ul>
            {Object.values(this.props.servers).map((server) => {
              return <ServerIndexItem
                key={server.id}
                server={server}
                urlServer={this.props.urlServer}
              />
            })}
            </ul>
            <CreateServerContainer />
          </div>
          <div className='channel-wrap'>
          <h3 className="selected-server">Select a Server</h3>
          <CreateChannelContainer server={this.props.match.params.serverId}/>
          </div>
          <Chat />
          <div className="user-wrap">
            <h3>Welcome to Dischannel!</h3>
            <span>Select a Server to get chatting!</span>
            <button onClick={this.props.logout} className='logout'>Logout</button>
          </div>
        </>
      )
    }
    return (
      <>
      <div className='server-wrap'>
        <h3>Servers</h3>
        <ul>
          {Object.values(this.props.servers).map((server) => {
            return <ServerIndexItem
              key={server.id}
              server={server}
              urlServer={this.props.urlServer}
            />
          })}
          <CreateServerContainer />
        </ul>
      </div>
      <Channel />
      </>
    )
  }
}

export default withRouter(ServerIndex)