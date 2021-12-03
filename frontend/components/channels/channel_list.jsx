import React from "react";

class ChannelList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    return (
      
      <div className='channel-wrap'>
        <h3>Channels</h3>
        <ul>
          <li>
            Troy
          </li>
          <li>
            + Add a new channel
          </li>
        </ul>
      </div>
        
    )
  }
}

export default ChannelList