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
  }

  render () {
    return (
      <div className='login-form-container'>
        <form onSubmit={this.handleSubmit} className='login-form-box'>
          {this.props.formType}
          <br/>
          {this.props.navLink}
          {this.renderErrors()}
          <div className='login-form'>
            <label>Username:
              <input type='text' value={this.state.username} onChange={this.update('username')} className='login-username'></input>
            </label>
            <label>Email:
              <input type='text' value={this.state.email} onChange={this.update('email')} className='login-email'></input>
            </label>
            <br/>
            <label>Password:
              <input type='password' value={this.state.password} onChange={this.update('password')} className='login-password'></input>
            </label>
            <input className="session-start" type="submit" value={this.props.formType} />
          </div>
        </form>

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
}

export default SessionForm