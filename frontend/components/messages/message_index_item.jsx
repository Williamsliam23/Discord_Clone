import React from "react";

class MessageIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        {this.props.author.username}
        <br></br>
        {this.props.message.body}
      </li>
    )
  }
}

export default MessageIndexItem