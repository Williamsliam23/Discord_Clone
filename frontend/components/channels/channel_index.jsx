import React from "react";

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {activeChannel: null}
    this.setActiveChannel = this.setActiveChannel.bind(this)
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  setActiveChannel(e) {
    console.log(e.target.value)
    this.setState({activeChannel: e.target.value})
  }

  render() {

    return (
      
      <div className='channel-wrap'>
        <h3>Channels</h3>
        <ul>
          <a><li value={1} onClick={this.setActiveChannel}>
            Troy {/* <ChannelIndexItem this.state.activeChannel> */ }
          </li></a>
          <li>
            + Add a new channel {/* <ChannelForm */}
          </li>
        </ul>
      </div>
        
    )
  }
}

export default ChannelIndex