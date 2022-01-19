import React from "react";
import ServerIndexItem from "./server_index_item"
import { withRouter } from "react-router-dom"

class ServerIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      servers: this.props.fetchServers()
    }
  }

  componentDidMount(){
    this.props.fetchServers()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.servers.length !== this.props.servers.length){
      this.props.fetchChannels()
    }
  }
  render() {

    return (
      
      <div className='server-wrap'>
        <h3>Servers</h3>
        <ul>
          {Object.values(this.props.servers).map((server) => {
            return <ServerIndexItem

            />
          })}
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

export default withRouter(ServerIndex)