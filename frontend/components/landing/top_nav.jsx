import React from "react";
import { logout } from "../../util/session_api_util";

class TopNav extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {

    return (
      
      <div className='top-nav'>
        <ul className="link-navigation">
          <li className="link-item">GitHub</li>
          <li className="link-item">LinkedIn</li>
          <li className="link-item"></li>
          <button onClick={this.props.logout} className='logout'
          >Logout</button>
        </ul>
      </div>
        
    )
  }
}


export default TopNav