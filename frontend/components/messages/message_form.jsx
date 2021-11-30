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
          setAuthor = this.props.currentUser.id;
        }
        this.state = {
            id: setId,
            body: setBody,
            authorId: setAuthor
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
      e.preventDefault()
      this.props.submitForm(this.state)
      
      if (this.props.formType === 'create') {
          this.setState({
              body: "",
              author_id: this.props.currentUser.id
          })
      } else {
          this.props.processUpdate()
      }
    }

    render () {
      return(
        <form onSubmit={this.handleSubmit}>
            <textarea  value={this.state.body}></textarea>
            <input type="submit" value="Submit"/>
        </form>
      )  
    }
}

export default MessageForm