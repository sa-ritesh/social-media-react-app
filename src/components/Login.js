import React, { Component } from "react";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleEmail = (e) => {
    console.log("Handle Email");
    this.setState({
      email: e.target.value,
    });
  };
  handlePassword = (e) => {
    console.log("Handle Password");

    this.setState({
      password: e.target.value,
    });
  };
  handleSubmit = (e) => {
    console.log("Handle Submit");

    e.preventDefault();
    console.log("state", this.state);
  };
  render() {
    console.log("Render");
    return (
      <form className="login-form">
        <span className="login-signup-header">LOG IN</span>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            //ref={this.emailInputRef}
            onChange={this.handleEmail}
            value={this.state.email}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            //ref={this.passwordInputRef}
            onChange={this.handlePassword}
            value={this.state.password}
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
