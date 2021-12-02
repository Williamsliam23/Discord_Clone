import React from "react";


class MessageIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteMessage = this.deleteMessage.bind(this)
  }

  deleteMessage() {
    this.props.deleteMessage(this.props.message.id)
  }



  render() {
    return (
      <li>
        {this.props.message.authorId}
        <br />
        {this.props.message.body}
      </li>
    )
  }
}

export default MessageIndexItem