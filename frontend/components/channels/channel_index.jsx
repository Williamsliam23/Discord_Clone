import React from "react";

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    return (
      
      <div className='channel-wrap'>
        <h3>Channels</h3>
        <ul>
          <li>
            Troy {/* <ChannelIndexItem> */ }
          </li>
          <li>
            + Add a new channel {/* <ChannelForm */}
          </li>
        </ul>
      </div>
        
    )
  }
}

export default ChannelIndex