import React from "react";
import MessageIndexItem from "./message_index_item";
import AlwaysScrollToBottom from "./ChatScroll"

class MessageIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      activeSubscription: null
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.activeChannel !== this.props.activeChannel
  }

  setSubscription(){
    this.props.fetchMessages(Object.values(this.props.activeChannel)[0]["id"])
  }

  componentDidUpdate(){
    if(Object.values(this.props.activeChannel).length !== 0){
      this.props.fetchMessages(Object.values(this.props.activeChannel)[0]["id"])
    }
  }

  render () {
    console.log(this.props)
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