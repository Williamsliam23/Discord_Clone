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
      this.checkSubmit = this.checkSubmit.bind(this)
  }

  shouldComponentUpdate(nextState, nextProps){
    return (this.props.activeChannel !== nextProps.activeChannel)
  }

  handleSubmit(e) {
    e.preventDefault()
    const message = Object.assign({}, this.state);
    
    if (this.props.formType === 'create') {
      this.props.processCreate(message)
      this.setState({
        body: "",
        authorId: this.props.currentUser
      })
    } else {
      this.props.processUpdate(message)
      this.setState({
        body: "",
        authorId: this.props.currentUser
      })
    }
  }

  checkSubmit(e){
    if (e.charCode === 13){
      this.handleSubmit(e)
    }
  }
  
  updateMessage(e) {
    if(this.props.activeChannel){
    this.setState({body: e.currentTarget.value, channelId: this.props.activeChannel})
    }
  }
  
  render () {
    return(
      <form className='position-chat' onSubmit={this.handleSubmit}>
          <textarea className='box' type='text' onChange={this.updateMessage} value={this.state.body} maxLength="500"
          placeholder='Get to chatting!' onKeyPress={this.checkSubmit}>
          </textarea>
      </form>
    )
  }
}

export default MessageForm