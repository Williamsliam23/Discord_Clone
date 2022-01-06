import React from "react";

class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props)
    // this.setActiveChannel = this.setActiveChannel.bind(this)
  }

  // setActiveChannel(e) {
  //   this.setState({activeChannel: e.target.id})
  //   console.log(state)
  // }

  render() {
    return (
      <li>
        {this.props.channel.title}
      </li>
    )
  }
}

export default ChannelIndexItem