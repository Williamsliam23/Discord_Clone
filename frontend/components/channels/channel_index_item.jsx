import React from "react";
import { withRouter } from "react-router-dom";

class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.setActiveChannel = this.setActiveChannel.bind(this)
    this.showButton = this.showButton.bind(this)
    this.hideButton = this.hideButton.bind(this)
    this.deletion = this.deletion.bind(this)
  }

  componentDidMount(){
    this.props.fetchChannels(this.props.match.params.serverId)
  }

  setActiveChannel(e) {
    this.props.history.push(`/servers/${this.props.match.params.serverId}/channels/${e.target.value}`)
    this.props.active(e.target.value)
  }

  showButton(){
    let el = document.getElementById(`${this.props.channel.id}`).getElementsByClassName('channel-delete-svg')[0]
    el.style.visibility = "visible"
  }

  hideButton(){
    let el = document.getElementById(`${this.props.channel.id}`).getElementsByClassName('channel-delete-svg')[0]
    el.style.visibility = "hidden"
  }
  deletion(id){
    this.props.deleteChannel(id)
    this.props.history.push(`/servers/${this.props.match.params.serverId}/`);
  }


  render() {
    return (
      <div className="toggle-channel-buttons" id={`${this.props.channel.id}`}>
      <li value={this.props.channel.id} 
      onClick={this.setActiveChannel} 
      className="channel-list-item"
      >
        # {this.props.channel.title} 
      </li>
      <img onClick={()=>this.deletion(this.props.channel.id)} 
        className="channel-delete-svg" src="delete.svg" />
      </div>
    )
  }
}

export default withRouter(ChannelIndexItem)