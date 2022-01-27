import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this)
  }

  componentWillUnmount(){
    this.props.removeErrors()
  }

  loginOrSignup() {
    if (this.props.formType === 'Sign up') {
      return (
        <div className='login-form'>
            <label className='log-label'><h4>Username:</h4>
              <input type='text' value={this.state.username} onChange={this.update('username')} className='login-field'></input>
            </label>
            <br />
            <br />
            <label className='log-label'><h4>Email:</h4>
              <input type='text' value={this.state.email} onChange={this.update('email')} className='login-field'></input>
             </label>
            <br/>
            <br/>
            <label className='log-label'><h4>Password:</h4>
              <input type='password' value={this.state.password} onChange={this.update('password')} className='login-field'></input>
            </label>
            <br />
            <br />
            <input className="session-start" type="submit" value={this.props.formType} />
            <br />
            <br />
            <span>Already have an account?</span>
            <br />
            {this.props.navLink}
          </div>
      )
    } else if (this.props.formType === 'Login'){
      return(
        <div className='login-form'>
            <label className='log-label'><h4>Username:</h4>
              <input type='text' value={this.state.username} onChange={this.update('username')} className='login-field'></input>
            </label>
            <br />
            <br />
            
            <label className='log-label'><h4>Password:</h4>
              <input type='password' value={this.state.password} onChange={this.update('password')} className='login-field'></input>
            </label>
            <br />
            <br />
            <input className="session-start" type="submit" value={this.props.formType} />
            <br />
            <br />
            <input className="session-start" type="button" value="Demo User Login" onClick={this.demoLogin} />
            <br />
            <br />
            <span>Don't have an account?</span>
            <br />
            <br />
            {this.props.navLink}
          </div>
      )
    }
  }

  render () {
    return (
      <div className='sign-wrapper'>
      <div className='login-form-container'>
        <form onSubmit={this.handleSubmit} className='login-form-box'>
          {this.props.formType}
          <br/>
          <br/>
          <br/>
          
          {this.renderErrors()}
          {this.loginOrSignup()}
        </form>
      </div>
      </div>
    )

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
              <br />
            </li>
          ))}
        </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  demoLogin(){
    const demoUser = {
      username: "Demo User",
      password: "DemoProductPassword"
    }
    const user = Object.assign({}, demoUser);
    this.props.processForm(user);
  }
}

export default SessionForm