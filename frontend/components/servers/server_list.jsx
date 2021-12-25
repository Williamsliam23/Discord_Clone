import React from "react";

class ServerList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    return (
      
      <div className='server-wrap'>
        <h3>Servers</h3>
        <ul>
          <li>
            Main {/* li's for each server the user is associated with */}
          </li>
          <li>
            Aegean Sea
          </li>
          <li>
            Create Server {/* modal for server creation */}
          </li>
        </ul>
      </div>
        
    )
  }
}

export default ServerList