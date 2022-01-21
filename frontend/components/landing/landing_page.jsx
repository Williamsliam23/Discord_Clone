import React from "react";
import Servers from "../servers/Server";


class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.props.fetchServers
  }

  componentDidMount() {
    this.props.fetchServers()
  }

  render() {

    return (
      <>
        <div className='landing'>
          <div className='side-bar'>
            <Servers />
          </div>
        </div>
      </>
    )
  }
}

export default LandingPage