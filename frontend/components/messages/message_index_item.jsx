import React from "react";





class MessageIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      author: this.props.author[this.props.message.author_id].username
    }
    this.deleteMessage = this.deleteMessage.bind(this)
    this.allowChange = this.allowChange.bind(this)
  }

  allowChange(){
    if (this.props.message.author_id === this.props.userId){
      console.log("Hello Again")
    }
  }


  deleteMessage() {
    this.props.deleteMessage(this.props.message.id)
  }



  render() {
    
    return (
      <div className="user-message" onClick={this.allowChange}>
      <li className="author">
        {this.state.author} 
        </li>
        <li className="body">
        &nbsp;&nbsp;&nbsp;&nbsp;
        {this.props.message.body}
      </li>
      </div>
    )
  }
}

export default MessageIndexItem