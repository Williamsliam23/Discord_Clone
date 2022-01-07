import React from "react";
import UserListItem from "./users_list_item";

class UserList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  render () {
    return(
      <div>
        <ul className='user-wrap'>
        ?
          {this.props.members.map((user) => (
            <UserListItem
              key={user.id}
              user={user}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default UserList