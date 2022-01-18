import React from "react";

class MessageForm extends React.Component {

  constructor(props) {
      super(props)
      let setId, setBody, setAuthor, setChannel;
      if (this.props.message) {
        setId = this.props.message.id;
      } else {
        setId = null;
      }
      if (this.props.formType === "update") {
        setBody = this.props.message.body;
      } else {
        setBody = "";
      }
      if (this.props.message) {
        setAuthor = this.props.message.authorId;
      } else {
        setAuthor = this.props.currentUser;
      }
      if (this.props.activeChannel) {
        setChannel = this.props.activeChannel
      } else {
        setChannel = undefined;
      }
      this.state = {
          id: setId,
          body: setBody,
          authorId: setAuthor,
          channelId: setChannel
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.updateMessage = this.updateMessage.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
      const message = Object.assign({}, this.state);
      this.props.processCreate(message)
      
      if (this.props.formType === 'create') {
        this.setState({
          body: "",
          authorId: this.props.currentUser
        })
      } else {

    }
  }
  
  updateMessage(e) {
    let setChannel
    // if(Object.keys(this.props.activeChannel).length !== 0) {

      this.setState({body: e.currentTarget.value})
    // } else {
    //   setChannel = undefined;
    //   this.setState({body: "",
    //     channelId: setChannel})
    // }
  }
  
  render () {
    return(
      <form className='position-chat' onSubmit={this.handleSubmit}>
          <textarea className='box' type='text' onChange={this.updateMessage} value={this.state.body} maxLength="500"
          placeholder='Get to chatting!'>
          </textarea>
          <input className="send-message" type="submit" value="Submit"/>
      </form>
    )
  }
}

export default MessageForm