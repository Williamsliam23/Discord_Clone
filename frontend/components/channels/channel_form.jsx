import React from "react";

class ChannelForm extends React.Component {

  constructor(props) {
      super(props)
      let setTitle, setAuthor;
      setAuthor = this.props.currentUser;
      setTitle = ""
      this.state = {
        id: null,
        title: "",
        authorId: setAuthor,
        serverId: this.props.server
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.updateChannel = this.updateChannel.bind(this)
      this.creation = this.creation.bind(this)
      this.cancel = this.cancel.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const channel = Object.assign({}, this.state);
    this.props.processCreate(channel)
    this.setState({
      title: "",
      authorId: this.props.currentUser,
      serverId: this.props.server
    })
    this.cancel()
  }

  checkSubmit(e){
    if (e.charCode === 13){
      this.handleSubmit(e)
    }
  }
  
  updateChannel(e) {
      this.setState({title: e.currentTarget.value})
  }

  cancel(){
    this.setState({title: ""})
    $(function (){
      $(".modal-create-channel").toggleClass("hidden")
    })
  }

  creation(){
    $(function (){
      $(".modal-create-channel").toggleClass("hidden")
  })
  }
  
  render () {
    return(
      <>
      <h4 className="create-channel-wrap" onClick={() => this.creation()}>+ Create a Channel</h4>
      <div className="modal-create-channel hidden">
      <button className="cancel-channel" onClick={this.cancel}>X</button>
      <h2>Create a Text Channel</h2>
      <form className='channel-create' onSubmit={this.handleSubmit}>
        <label>Channel Title:
          <input className="channel-name" type="text" value={this.state.title}
           onChange={this.updateChannel} onKeyPress={this.checkSubmit}/>
        </label>
        <label className="channel-buttons">
          <input className="submit-channel" type="submit" value="Create" />
        </label>
      </form>
      </div>
      </>
    )
  }
}

export default ChannelForm