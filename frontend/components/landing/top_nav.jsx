import React from "react";


class TopNav extends React.Component {
  constructor(props) {
    super(props)
  }

  


  render() {

    return (
      
      <div className='top-nav'>
        <ul className="link-navigation">
          <li className="link-item"><a href='https://github.com/Williamsliam23/Discord_Clone'><img className='image-link' src="Octocat.png" alt='Github' /></a> </li>
          <li className="link-item"><a href='https://www.linkedin.com/in/liam-williams-76035613a/'><img className='image-link' src="Li-In-Bug.png" /></a></li>
          <li className="link-item"></li>
          <button onClick={this.props.logout} className='logout'
          >Logout</button>
        </ul>
      </div>
        
    )
  }
}


export default TopNav
