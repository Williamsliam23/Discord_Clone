import React from "react";
import MessageIndexItem from "./message_index_item";
import AlwaysScrollToBottom from "./ChatScroll"

class MessageIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return(
      <div>
        <ul className='message-list'>
          {this.props.messages.map((message) => (
            
            <MessageIndexItem 
              key={message.id}
              message={message}
              author={Object.assign({}, this.props.members)}
            />
            
          ))}
        </ul>
        <AlwaysScrollToBottom />
      </div>
    )
  }
}

export default MessageIndex