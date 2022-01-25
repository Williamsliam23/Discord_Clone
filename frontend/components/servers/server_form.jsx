import React from "react";

class ServerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      title: "",
      creator_id: this.props.currentUser
    }
    this.submitServer = this.submitServer.bind(this)
    this.updateServer = this.updateServer.bind(this)
  }

  submitServer(e) {
    e.preventDefault()
    let title = this.state.title
    if (title.trim() !== ""){
    const server = Object.assign({}, this.state);
    this.props.processCreate(server)
    }
    this.setState({
      title: "",
      creator_id: this.props.currentUser
    })
  }

  updateServer(e){
    this.setState({ title: e.currentTarget.value })
  }

  render() {
    return(
      <>
      <h2 className="create-new-server">+</h2>
      <div className="modal-create-server">
        <form >
          <input className="server-name" type="text" value={this.state.title} onChange={this.updateServer}/>
          <input className="create-server" type="submit" value="Submit" onClick={this.submitServer}/>
        </form>
      </div>
      </>
    )
  }
}

export default ServerForm