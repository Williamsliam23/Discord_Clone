import React from "react";
import { withRouter } from "react-router-dom";
import MessageIndexItem from "./message_index_item";
import AlwaysScrollToBottom from "./ChatScroll"
import CreateMessageContainer from "./create_message_container";

class MessageIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      activeChannel: this.props.match.params.channelId
    }
    this.setSubscription = this.setSubscription.bind(this)
  }

  componentDidMount() {
    this.props.fetchUsers()
    this.props.fetchMessages(this.props.match.params.channelId)
    this.setSubscription()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.channelId !== this.props.match.params.channelId){
      this.props.fetchUsers()
      this.props.fetchMessages(this.props.match.params.channelId)
    }
  }



  setSubscription(){

    // this.props.fetchMessages(this.props.match.params.channelId)
    App.cable.subscriptions.create(
      {
        channel: "ChatChannel",
        id: this.props.match.params.channelId
      },
      {
        received: (data) => {
          this.props.fetchMessages(this.props.match.params.channelId)
        }
      }
    )
  }


  render () {
    if(this.props.messages.length === 0){
      return (
        <div className="no-messages">
        <CreateMessageContainer activeChannel={this.props.match.params.channelId}/>
        </div>
      )
    }
    if(this.props.members.length === 0){
      return (
        <div className="no-messages">
        <CreateMessageContainer activeChannel={this.props.match.params.channelId}/>
        </div>
      )
    }
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
      <CreateMessageContainer activeChannel={this.props.match.params.channelId}/>
      </div>
    )
  }
}

export default withRouter(MessageIndex)