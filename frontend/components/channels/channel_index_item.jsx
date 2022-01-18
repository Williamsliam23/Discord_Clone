import React from "react";
import { withRouter } from "react-router-dom";

class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hovering: false
    }
    this.setActiveChannel = this.setActiveChannel.bind(this)
    this.toggleHover = this.toggleHover.bind(this)
  }

  setActiveChannel(e) {
    this.props.history.push(`/channels/${e.target.value}`)
  }

  toggleHover(e) {
    this.setState({hovering: this.state.hovering ? false : true})
  }


  render() {
    return (
      <li value={this.props.channel.id} 
      onClick={this.setActiveChannel} 
      className="channel-list-item"
      onMouseEnter={this.toggleHover} 
      onMouseLeave={this.toggleHover}
      >
        {this.props.channel.title}
      </li>
    )
  }
}

export default withRouter(ChannelIndexItem)