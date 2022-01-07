import React from "react";
import UserListItem from "./users_list_item";

class UserList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props)
    this.props.fetchUsers()
  }

  render () {
    // this.props.fetchUsers()
    return(
      <div>
        <ul className='user-wrap'>
        ?
          {/* {this.props.members.map((user) => (
            <UserListItem
              key={user.id}
              message={user}
            />
          ))} */}
        </ul>
      </div>
    )
  }
}

export default UserList