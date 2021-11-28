import React from "react";

class MessageIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.author.username}
        <br></br>
        {this.props.message.body}
      </>
    )
  }
}

export default MessageIndexItem