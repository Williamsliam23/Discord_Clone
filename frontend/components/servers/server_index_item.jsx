import React from "react";
import { withRouter } from "react-router-dom";

class ServerIndexItem extends React.Component {
  constructor(props){
    super(props)
    this.setActiveServer = this.setActiveServer.bind(this)
    console.log(this.server.members)
  }

  setActiveServer(e){
    this.props.history.push(`/servers/${this.props.server.id}`)
  }

  render(){
    return (
      <li onClick={this.setActiveServer} >
        {this.props.server.title}
      </li>
    )
  }
}

export default withRouter(ServerIndexItem)