import React from "react";
import { Link } from "react-router-dom";

const Greet = () => (
  <div className='greet'>
    <h1>Welcome to Dischannel</h1>
    <ul className='entry-options'>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Sign Up</Link></li>
      <li className="link-item"><a href='https://github.com/Williamsliam23/Discord_Clone'><img className='image-link' src="Octocat.png" alt='Github' /></a> </li>
      <li className="link-item"><a href='https://www.linkedin.com/in/liam-williams-76035613a/'><img className='image-link' src="Li-In-Bug.png" /></a></li>
    </ul>
  </div>
)

export default Greet