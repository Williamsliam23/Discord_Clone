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
            Main
          </li>
          <li>
            Aegean Sea
          </li>
          <li>
            Create Server
          </li>
        </ul>
      </div>
        
    )
  }
}

export default ServerList