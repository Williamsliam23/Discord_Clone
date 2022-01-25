import React from "react";

class ServerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      title: "",
      creator_id: this.props.currentUser,
      server_id: ""
    }
    console.log(this.props)
    this.updateInvite = this.updateInvite.bind(this)
    this.submitServer = this.submitServer.bind(this)
    this.updateServer = this.updateServer.bind(this)
    this.creation = this.creation.bind(this)
    this.cancel = this.cancel.bind(this)
    this.checkSubmit = this.checkSubmit(this)
    this.checkMemberSubmit = this.checkMemberSubmit(this)
    this.memberSubmit = this.memberSubmit.bind(this)
  }

  submitServer(e) {
    e.preventDefault()
    let title = this.state.title
    if (title.trim() !== ""){
    const server = Object.assign({}, { id: this.state.id,
    title: this.state.title,
    creator_id: this.state.creator_id });
    this.props.processCreate(server)
    this.cancel()
    }
    this.setState({
      title: "",
      creator_id: this.props.currentUser
    })
  }

  memberSubmit(e){
    e.preventDefault()
    const membership = Object.assign({}, {server_id: e.target.value, user_id: this.state.creator_id})
    this.props.createMembership(membership).then(
    this.props.fetchServers(this.props.currentUser))
    this.cancel()
  }

  updateServer(e){
    this.setState({ title: e.currentTarget.value })
  }

  updateInvite(e){
    this.setState({server_id: e.currentTarget.value})
  }

  cancel(){
    this.setState({title: "", server_id: ""})
    $(function (){
      $(".modal-create-server").toggleClass("hidden")
    })
  }

  creation(){
    $(function (){
      $(".modal-create-server").toggleClass("hidden")
    })
  }

  checkSubmit(e){
    if (e.charCode === 13){
      this.handleSubmit(e)
    }
  }

  checkMemberSubmit(e){
    if (e.charCode === 13){
      this.memberSubmit(e)
    }
  }

  render() {
    return(
      <>
      <div className="server-item">
      <h2 onClick={this.creation} className="the-server-title">+</h2>
      </div>
      <div className="modal-create-server hidden">
      <h4 className="community">Let's make your community!</h4>
      <button className="cancel-server" onClick={this.cancel}>X</button>
        <form className="server-create-form">
          <label>Server Title:</label>
            <textarea className="server-name" onKeyPress={this.checkSubmit} value={this.state.title} onChange={this.updateServer}
              placeholder="What will you call it?"
            />
          <input className="create-server" type="submit" value="Create" onClick={this.submitServer}/>
        </form>
        <h4 className="community">-or-</h4>
        <form className='joining' >
        <label>Join a Server:</label>
          <input className='invite-code' type='text' onKeyPress={this.checkMemberSubmit} onChange={this.updateInvite} 
          value={this.state.server_id} maxLength="16"
          placeholder='Place your invite code!'>
          </input>
        
          <input className="join-server" onClick={this.memberSubmit} type="submit" value="Join"/>
        </form>
      </div>
      </>
    )
  }
}

export default ServerForm