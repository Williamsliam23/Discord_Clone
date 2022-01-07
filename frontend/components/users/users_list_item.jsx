import React from "react";


class UserListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <li>
        <br />
        {this.props.user.username}
        <br />
      </li>
    )
  }
}

export default UserListItem