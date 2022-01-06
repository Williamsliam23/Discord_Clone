import React from "react";
import ChannelIndexItem from "./channel_index_item";

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {activeChannel: null}
    this.setActiveChannel = this.setActiveChannel.bind(this)
  }

  componentDidMount() {
    this.props.fetchChannels()
  }

  componentDidUpdate() {
    this.props.fetchMessages(this.state.activeChannel)
    console.log(this.state)
  }

  setActiveChannel(e) {
    this.props.setActiveChannel(e.target.value)
  }

  render() {

    return (
      
      <div className='channel-wrap'>
        <h3>Channels</h3>
        <ul>
          <li value={1} onClick={this.setActiveChannel}>
          ah
          {/* {this.props.channels.map((channel) => (
            <ChannelIndexItem />  
          ))}*/}</li> 
          <li>
            + Add a new channel {/* <ChannelForm */}
          </li>
        </ul>
      </div>
        
    )
  }
}

export default ChannelIndex