import React from "react";
import MessageIndexItem from "./message_index_item";

const MessageIndex = () => (
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

export default MessageIndex