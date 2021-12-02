import React from "react";

class UserList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // this.props.receiveCurrentUser()
  }

  render() {

    return (
      
      <div className='user-wrap'>
        <h3><a>Users</a></h3>
        <ul>
          <li>
            TestUser
          </li>
        </ul>
      </div>
        
    )
  }
}

export default UserList