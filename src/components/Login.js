import React, { Component } from "react";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.emailInputRef = React.createRef();
    this.passwordInputRef = React.createRef();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("emailInputRef", this.emailInputRef);
    console.log("passwordInputRef", this.passwordInputRef);
  };
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">LOG IN</span>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            ref={this.emailInputRef}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            ref={this.passwordInputRef}
          />
        </div>
        <div className="field">
          <button onClick={this.handleSubmit}>Log In</button>
        </div>
      </form>
    );
  }
}

export default LogIn;
