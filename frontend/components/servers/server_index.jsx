import React from "react";
import ServerIndexItem from "./server_index_item"
import Channel from "../channels/Channel"
import Chat from "../messages/chat"
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
      return(
        <>
          <div className='server-wrap'>
            <ul>
            </ul>
            <CreateServerContainer currentUser={this.props.currentUser} 
            createMembership={this.props.createMembership}/>
          </div>
          <div className='channel-wrap'>
          <h3 className="selected-server">Select a Server</h3>
          <h4 className="channels-header">Text Channels</h4>
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
    if(this.props.match.params.serverId === ":serverId"){
      return(
        <>
          <div className='server-wrap'>
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
            <CreateServerContainer currentUser={this.props.currentUser} 
            createMembership={this.props.createMembership}/>
          </div>
          <div className='channel-wrap'>
          <h3 className="selected-server">Select a Server</h3>
          <h4 className="channels-header">Text Channels</h4>
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
      </div>
      <Channel />
      </>
    )
  }
}

export default withRouter(ServerIndex)