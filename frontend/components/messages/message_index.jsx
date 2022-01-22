import React from "react";
import { withRouter } from "react-router-dom";
import MessageIndexItem from "./message_index_item";
import AlwaysScrollToBottom from "./ChatScroll"
import CreateMessageContainer from "./create_message_container";

class MessageIndex extends React.Component {
  constructor(props) {
    super(props)
    this.setSubscription = this.setSubscription.bind(this)
    this.unsub = this.unsub.bind(this)
    this.state={
      activeChannel: this.props.match.params.channelId,
      user: Object.values(this.props.currentUser)[0].id,
      subscribe: this.setSubscription()
    }
  }

  unsub(){
    this.setState({subscribe: null})
  }

  componentDidMount() {
    this.props.fetchUsers()
    this.props.fetchMessages(this.props.match.params.channelId)
    this.setSubscription()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.channelId !== this.props.match.params.channelId){
      this.unsub()
      this.setSubscription()
      this.props.fetchUsers()
      this.props.fetchMessages(this.props.match.params.channelId)
    }
  }



  setSubscription(){
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
      <>
      <div className="message-holder">
        <ul className='message-list'>
          {this.props.messages.map((message) => (
            
            <MessageIndexItem 
              key={message.id}
              message={message}
              author={Object.assign({}, this.props.members)}
              userId={this.state.user}
            />
            
          ))}
        </ul>
        <AlwaysScrollToBottom />
      </div>
      <CreateMessageContainer activeChannel={this.props.match.params.channelId}/>
      </>
    )
  }
}

export default withRouter(MessageIndex)