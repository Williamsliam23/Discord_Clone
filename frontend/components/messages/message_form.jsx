import React from "react";

class MessageForm extends React.Component {

  constructor(props) {
      super(props)
      let setId, setBody, setAuthor;
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
      this.state = {
          id: setId,
          body: setBody,
          authorId: setAuthor
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
        author_id: this.props.currentUser
      })
    } else {
      
    }
  }
  
  updateMessage(e) {
    this.setState({ body: e.currentTarget.value })
  }
  render () {
    return(
      <form onSubmit={this.handleSubmit}>
          <textarea className='box' type='text' onChange={this.updateMessage} value={this.state.body} maxLength="500"
          placeholder='Get to chatting!'></textarea>
          <input type="submit" value="Submit"/>
      </form>
    )  
  }
}

export default MessageForm