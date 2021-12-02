import React from "react";
import MessageIndexItem from "./message_index_item";

class MessageIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchMessages()
  }

  render () {
    return(
      <div>
        <ul className='message-list'>
          {this.props.messages.map((message) => (
            <MessageIndexItem 
              key={message.id}
              message={message}
            />
  
          ))}
        </ul>
      </div>
    )
  }
}

export default MessageIndex