import React from "react";
import ChannelIndexItem from "./channel_index_item";

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeChannel: this.props.channels.first,
      activeSub: null
    };
    this.setActiveChannel = this.setActiveChannel.bind(this)
    this.activeSubscription = this.activeSubscription.bind(this)
  }

  componentDidMount() {
    this.props.fetchChannels()
    this.props.fetchMessages(this.state.activeChannel)
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.activeChannel !== this.state.activeChannel
  }

  componentDidUpdate(nextProps) {
    if(Object.values(nextProps.activeChannel).length !== 0){
      this.props.fetchMessages(this.state.activeChannel)
    }
      this.activeSubscription(this.state.activeChannel)
  }
  
  setActiveChannel(e) {
    this.props.setActiveChannel(e.target.value)
    this.setState({activeChannel: e.target.value})
    this.props.fetchMessages(e.target.value)
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
    this.props.fetchMessages(active)

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