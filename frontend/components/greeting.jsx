import React from "react";
import { Link } from "react-router-dom";

const Greet = () => (
  <div className='greet'>
    <img className="front-logo" src="Dischannel-greet.png" alt="Logo"/>            
    <div className="entry-links">
      <ul className='entry-options'>
      <li color="white" className="link-item"><Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</Link></li>
      <li className="link-item"> </li>
      <li className="link-item"><Link color="white" to="/signup" style={{ textDecoration: 'none', color: 'white' }}>Sign Up</Link></li>
      <li className="link-item"><a href='https://github.com/Williamsliam23/Discord_Clone'><img className='image-link' src="Octocat.png" alt='Github' /></a> </li>
      <li className="link-item"><a href='https://www.linkedin.com/in/liam-williams-76035613a/'><img className='image-link' src="Li-In-Bug.png" /></a></li>
      <h1 className="welcome">Welcome to Dischannel</h1>
    </ul>
    </div>
    <div className="front flex-greet">
      <h1>Imagine a place...</h1>
      <p className="introduction">...where you can belong to a school club, a gaming group, or a <br/>
      worldwide art community. Where just you and a handful of friends <br/> can spend time together. A place that makes it easy 
      <br />
      to talk every day and hang out more often.
      </p>
      </div>
    <div className="section1 flex-greet">
      <div className='first-graphic'>
            <img src="Channelling.png" className="graphic1" alt="Community" />
        </div>
      <div className="text-holder">
      <h2>Create a space where you belong</h2>
      <p>Dischannel servers are organized into personalized<br/> channels where you can communicate, share,
       and  <br/>
       enjoy your time with friends. </p>
      </div>
    </div>
    <div className="section2 flex-greet">
    <div className="text-holder">
      <h2>Where hanging out is easy</h2>
      <p>Relax in a channel of your choice.<br/>
      Friends in you server can chat in real time,<br/> making your time worth it.</p>
    </div>
    <img src="Chatting.png" className="graphic2" alt="Chatting"/>
    </div>
    <div className="section3 flex-greet">
      <img src="Final.png" className="graphic3" alt="Final" />
      <div className="text-holder">
      <h2>Come on in and have a blast!</h2>
      </div>
    </div>     
  </div>
)

export default Greet