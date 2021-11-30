import React from "react";

class MessageForm extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            id: this.props.message ? this.props.message.id : null,
            body: this.props.formType === "update" ? this.props.message.body : "",
            author_id: message ? message.authorId : currentUser.id
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