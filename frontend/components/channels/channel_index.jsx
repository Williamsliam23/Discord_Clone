import React from "react";
import ChannelIndexItem from "./channel_index_item";

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeChannel: null,
      activeSub: null
    };
    this.setActiveChannel = this.setActiveChannel.bind(this)
    this.activeSubscription = this.activeSubscription.bind(this)
  }

  componentDidMount() {
    this.props.fetchChannels()
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.activeChannel !== this.props.activeChannel
  }

  componentDidUpdate() {
      this.props.fetchMessages(this.state.activeChannel)
      this.activeSubscription(this.state.activeChannel)
  }
  
  setActiveChannel(e) {
    this.props.setActiveChannel(e.target.value)
    this.setState({activeChannel: e.target.value})
    this.activeSubscription(e.target.value)
  }

  render() {
    return (
      
      <div className='channel-wrap'>
        <h3>Channels</h3>
        <ul>
          <li value={1} onClick={this.setActiveChannel}>
          Troy
          {/* {this.props.channels.map((channel) => (
            <ChannelIndexItem 
              key={this.channel.id}
              channel={channel}
            />  
          ))} */}
          </li> 
          <br />
          <li value={2} onClick={this.setActiveChannel}>
            + Add a new channel 
            {/* <ChannelForm */}
          </li>
        </ul>
      </div>
        
    )
  }

  activeSubscription(active) {

    const subscribe = App.cable.subscriptions.create(
      {
        channel: "ChatChannel",
        channelId: active
      },
      {
        received: (data) => {
          this.props.fetchMessages(active)
        }
      }
    )
    this.setState({ subscribe })
  }

  unsubscribe() {

  }
}

export default ChannelIndex