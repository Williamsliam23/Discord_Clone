import React from "react";
import UserListItem from "./users_list_item";

class UserList extends React.Component {
  constructor(props) {
    super(props)
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
            
          </ul>
        <button onClick={this.props.logout} className='logout'>Logout</button>
        </div>
        </>
      )
    }
    const mem = Object.values(this.props.server.members)
    return(
      <>
      <div className='user-wrap'>
        <h3>Members</h3>
        <ul>
          {mem.map((user) => (
            <UserListItem
              key={user.id}
              user={user}
            />
          ))}
        </ul>
      <button onClick={this.props.logout} className='logout'>Logout</button>
      </div>
      </>
    )
  }
}

export default UserList