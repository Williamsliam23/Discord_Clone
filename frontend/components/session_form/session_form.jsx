import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render () {
    return (
      <div className='login-form-container'>
        <form onSubmit={this.handleSubmit} className='login-form-box'>
          {this.props.formType}
          <br/>
          {this.props.navLink}
          <div className='login-form'>
            <label>Username:
              <input type='text' value={this.state.username} className='login-username'></input>
            </label>
            
            <label>Password:
              <input type='password' value={this.state.password} className='login-password'></input>
            </label>
            <input className="session-start" type="submit" value={this.props.formType} />
          </div>
        </form>

      </div>
    )

  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
}

export default SessionForm