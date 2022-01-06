import React from "react";

class MessageForm extends React.Component {

  constructor(props) {
      super(props)
      let count = 0
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
        setChannel = this.props.activeChannel["id"]
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
    if(this.props.activeChannel){
      console.log(this.state)
      console.log(this.props.activeChannel["0"].id)
      let dumb = this.props.activeChannel["0"].id
      this.setState({channelId: dumb})
      console.log(this.state)
      const message = Object.assign({}, this.state);
      this.props.processCreate(message)
      
      if (this.props.formType === 'create') {
        this.setState({
          body: "",
          authorId: this.props.currentUser,
          channelId: this.props.activeChannel
        })
      } else {

    }}
  }

  // componentDidUpdate() {
  //   if (this.props.activeChannel) {
  //     setChannel = this.props.activeChannel["id"]
  //   } else {
  //     setChannel = undefined;
  //   }
  //   this.setState({activeChannel = setChannel})
  // }
  
  updateMessage(e) {
    this.setState({ body: e.currentTarget.value })
  }
  render () {
    return(
      <form className='position-chat' onSubmit={this.handleSubmit}>
          <textarea className='box' type='text' onChange={this.updateMessage} value={this.state.body} maxLength="500"
          placeholder='Get to chatting!'></textarea>
          <input type="submit" value="Submit"/>
      </form>
    )  
  }
}

export default MessageForm