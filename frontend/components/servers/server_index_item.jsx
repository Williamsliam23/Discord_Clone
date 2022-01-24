import React from "react";
import { withRouter } from "react-router-dom";

class ServerIndexItem extends React.Component {
  constructor(props){
    super(props)
    this.setActiveServer = this.setActiveServer.bind(this)
  }

  setActiveServer(e){
    this.props.history.push(`/servers/${this.props.server.id}`)
    this.props.urlServer(this.props.server.id)
    this.props.setActiveChannel()
  }

  render(){
    return (
      <li className="server-item" onClick={this.setActiveServer} >
        <h3 className="the-server-title">{this.props.server.title[0].toUpperCase()}</h3>
      </li>
    )
  }
}

export default withRouter(ServerIndexItem)