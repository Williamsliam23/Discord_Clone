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
        authorId: setAuthor
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.updateChannel = this.updateChannel.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    const channel = Object.assign({}, this.state);
    this.props.processCreate(channel).then(this.props.fetchChannels())
    this.setState({
      title: "",
      authorId: this.props.currentUser
    })
  }
  
  updateChannel(e) {
      this.setState({title: e.currentTarget.value})
  }
  
  render () {
    return(
      <form className='position-chat' onSubmit={this.handleSubmit}>
          <input className="channel-name" type="text" value={this.state.title} onChange={this.updateChannel}/>
          <input className="create-channel" type="submit" value="Submit"/>
      </form>
    )
  }
}

export default ChannelForm