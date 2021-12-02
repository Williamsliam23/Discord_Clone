import React from "react";
import { logout } from "../../util/session_api_util";

class TopNav extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.logout()
  }

  render() {

    return (
      
      <div className='top-nav'>
        <ul className="link-navigation">
          <li className="link-item"><a>GitHub</a></li>
          <li className="link-item"><a>LinkedIn</a></li>
          <li className="link-item"><button onClick={this.handleSubmit} className='logout'
          >Logout</button></li>
        </ul>
      </div>
        
    )
  }
}


export default TopNav