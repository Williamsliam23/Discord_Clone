import React from "react";
import { withRouter } from "react-router-dom";

class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.setActiveChannel = this.setActiveChannel.bind(this)
  }

  setActiveChannel(e) {
    this.props.history.push(`/channels/${e.target.value}`)

  }


  render() {
    return (
      <li value={this.props.channel.id} 
      onClick={this.setActiveChannel} 
      className="channel-list-item"
      >
        # {this.props.channel.title}
      </li>
      
    )
  }
}

export default withRouter(ChannelIndexItem)