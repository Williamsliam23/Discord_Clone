import React from "react";
import reactDom from "react-dom";





class MessageIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      author: this.props.author[this.props.message.author_id].username
    }
    this.allowChange = this.allowChange.bind(this)
    this.showOptions = this.showOptions.bind(this)
    this.hideOptions = this.hideOptions.bind(this)
  }

  allowChange(){
    if (this.props.message.author_id === this.props.userId){
      console.log("true")
    }
  }

  showOptions(){
    if(this.props.message.author_id === this.props.userId){
    let el = document.getElementById(`${this.props.message.id}`).getElementsByClassName('edit-pencil')[0]
    el.style.visibility = "visible"
    let el2 = document.getElementById(`${this.props.message.id}`).getElementsByClassName('message-delete-svg')[0]
    el2.style.visibility = "visible"
    }
  }

  hideOptions(){
    let el = document.getElementById(`${this.props.message.id}`).getElementsByClassName('edit-pencil')[0]
    el.style.visibility = "hidden"
    let el2 = document.getElementById(`${this.props.message.id}`).getElementsByClassName('message-delete-svg')[0]
    el2.style.visibility = "hidden"
  }



  render() {
    
    return (
      <div className="user-message" id={`${this.props.message.id}`} 
      onMouseEnter={this.showOptions} onMouseLeave={this.hideOptions} onClick={this.allowChange}>
      <li className="author" >
        {this.state.author} 
        <img className="message-delete-svg" src="delete.svg" style={{visibility: "hidden"}}/> 
        <img className="edit-pencil" src="pencil.svg" style={{visibility: "hidden"}}/>
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