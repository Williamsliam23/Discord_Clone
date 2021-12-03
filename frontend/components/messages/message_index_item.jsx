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
        <br />
        {this.props.message.author_id} :  
        &nbsp;&nbsp;&nbsp;&nbsp;
        {this.props.message.body}
        <br />
      </li>
    )
  }
}

export default MessageIndexItem