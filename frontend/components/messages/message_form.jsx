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
      let dumb = Object.keys(this.props.activeChannel)[0]
      console.log(dumb)
      console.log(this.state)
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

  // componentDidUpdate() {
  //   let setChannel
  //   if(this.props.activeChannel === undefined) {
  //     setChannel = this.props.activeChannel["id"]
  //     this.setState({activeChannel: setChannel})
  //   } else {
  //     setChannel = undefined;
  //     this.setState({activeChannel: setChannel})
  //   }
  // }
  
  updateMessage(e) {
    let setChannel
    console.log(this.props.activeChannel)
    if(Object.keys(this.props.activeChannel).length !== 0) {
      setChannel = Object.keys(this.props.activeChannel)[0]
      console.log(setChannel)
      this.setState({body: e.currentTarget.value,
        channelId: setChannel})
    } else {
      setChannel = undefined;
      this.setState({body: "",
        channelId: setChannel})
    }
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