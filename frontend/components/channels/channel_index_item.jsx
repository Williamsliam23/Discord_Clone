import React from "react";

class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <li>
        {this.props.channel.title}
      </li>
    )
  }
}

export default ChannelIndexItem