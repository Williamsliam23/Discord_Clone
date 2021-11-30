import React from "react";

class MessageForm extends React.Component {

    constructor(props) {

        super(props)
        let setId
        this.state
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