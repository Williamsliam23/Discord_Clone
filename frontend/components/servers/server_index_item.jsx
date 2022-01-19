import React from "react";
import { withRouter } from "react-router-dom";

class ServerIndexItem extends React.Component {
  constructor(props){
    super(props)
    this.setActiveServer = this.setActiveServer.bind(this)
  }

  setActiveServer(e){
    this.props.history.push(`/server/${e.target.value}`)
  }

  render(){
    return (
      <li value={this.props.server.id} onClick={this.setActiveServer}>
        {this.props.server.title}
      </li>
    )
  }
}

export default withRouter(ServerIndexItem)