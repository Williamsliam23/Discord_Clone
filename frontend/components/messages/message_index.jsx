import React from "react";
import MessageIndexItem from "./message_index_item";
import AlwaysScrollToBottom from "./ChatScroll"
import CreateMessageContainer from "./create_message_container";

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
        <br />
        <br />
        <CreateMessageContainer />
      </div>
    )
  }
}

export default MessageIndex