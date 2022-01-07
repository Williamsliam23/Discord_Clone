import React from "react";
import AlwaysScrollToBottom from "./ChatScroll";




class MessageIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteMessage = this.deleteMessage.bind(this)
  }

  scrollToBottom(el) {
    el.current.scrollIntoView()
  }

  componentDidUpdate() {
    this.scrollToBottom()
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
        <AlwaysScrollToBottom />
      </li>
    )
  }
}

export default MessageIndexItem