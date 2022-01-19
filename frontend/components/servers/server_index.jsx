import React from "react";
import ServerIndexItem from "./server_index_item"
import Channel from "../channels/Channel"
import { withRouter } from "react-router-dom"
import CreateServerContainer from "./create_server_container";

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
      this.props.fetchServers()
    }
  }
  render() {
    if(this.props.servers.length === 0){
      return null
    }
    return (
      <>
      <div className='server-wrap'>
        <h3>Servers</h3>
        <ul>
          {Object.values(this.props.servers).map((server) => {
            return <ServerIndexItem
              key={server.id}
              server={server}
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