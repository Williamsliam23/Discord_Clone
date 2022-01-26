import React from "react";
import UserListItem from "./users_list_item";
import { withRouter } from "react-router-dom";

class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inviting: false
    }
    this.toggleInvite = this.toggleInvite.bind(this)
    this.leaveServer = this.leaveServer.bind(this)
  }

  invite(){
    if(this.state.inviting === true){
    return (
      <span className="code" onClick={this.toggleInvite}>Invite Code Copied! <br/> {this.props.server.invite_code}</span>
    )
    }
    return (
      <button className="code" onClick={this.toggleInvite}>Invite your friends</button>
    )
  }

  toggleInvite(){
    navigator.clipboard.writeText(this.props.server.invite_code)
    this.setState({ inviting: this.state.inviting ? false : true })
  }

  leaveServer(){
    let membership = Object.assign({}, {user_id: this.props.currentUser, server_id: this.props.server.id})
    this.props.deleteMembership(membership)
    this.props.history.push(`/servers/:serverId`)
    this.props.activeServer()
  }

  shouldComponentUpdate(){
    return (Object.values(this.props.server).length !== 0)
  }

  render () {
    if (Object.values(this.props.server).length === 4){
      return(
        <>
        <div className='user-wrap'>
          <h3>Members</h3>
          <ul>
          <li>
            Don't show
          </li>
          </ul>
          {this.invite()}
        <button onClick={this.props.logout} className='logout'>Logout</button>
        </div>
        </>
      )
    }
    const mem = Object.values(this.props.server.members)
    return(
      <>
      <div className='user-wrap'>
        <h3>Members</h3><span onClick={this.leaveServer}>x</span>
        <ul>
          {mem.map((user) => (
            <UserListItem
              key={user.id}
              user={user}
            />
          ))}
        </ul>
        {this.invite()}
        <button onClick={this.props.logout} className='logout'>Logout</button>
      </div>
      </>
    )
  }
}

export default withRouter(UserList)