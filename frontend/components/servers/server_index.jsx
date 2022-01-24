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
    this.state = {
      server_id: "",
      user_id: this.props.currentUser
    }
    this.updateInvite = this.updateInvite.bind(this)
    this.checkSubmit = this.checkSubmit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    this.props.fetchServers(this.props.currentUser)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.servers.length !== this.props.servers.length){
      this.props.fetchServers(this.props.currentUser)
    }
  }

  checkSubmit(e){
    if (e.charCode === 13){
      this.handleSubmit(e)
    }
  }

  handleSubmit(e){
    e.preventDefault()
    const membership = Object.assign({}, this.state)
    this.props.createMembership(membership).then(
    this.props.fetchServers(this.props.currentUser))
  }

  updateInvite(e){
    this.setState({server_id: e.currentTarget.value})
  }

  render() {
    if(this.props.servers.length === 0){
      return null
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
                setActiveChannel={this.props.setActiveChannel}
              />
            })}
            </ul>
            <CreateServerContainer />
            <form className='joining' >
              <input className='box' type='text' onKeyPress={this.checkSubmit} onChange={this.updateInvite} 
              value={this.state.join_server} maxLength="50"
              placeholder='Place your invite code!'>
              </input>
              <input className="join-server" type="submit" value="Join"/>
            </form>
          </div>
          <div className='channel-wrap'>
          <h3 className="selected-server">Select a Server</h3>
          <h4 className="channels-header">Text Channels</h4>
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
              setActiveChannel={this.props.setActiveChannel}
            />
          })}
          <CreateServerContainer />
        </ul>
        <form className='joining' >
              <input className='box' type='text' onKeyPress={this.checkSubmit} onChange={this.updateInvite} 
              value={this.state.join_server} maxLength="50"
              placeholder='Place your invite code!'>
              </input>
              <input className="join-server" type="submit" value="Join"/>
            </form>
      </div>
      <Channel />
      </>
    )
  }
}

export default withRouter(ServerIndex)