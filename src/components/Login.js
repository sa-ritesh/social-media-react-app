import React, { Component } from "react";
import { login } from "../actions/auth";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
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
    const { email, password } = this.state;
    if (email && password) {
      this.props.dispatch(login(email, password));
    }
  };
  render() {
    console.log("Render");
    console.log("login props", this.props.auth);
    const { inProgress, isLoggedin } = this.props.auth;
    if (isLoggedin) {
      return <Redirect path="/"></Redirect>;
    }

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
        {inProgress ? (
          <div className="field">
            <button onClick={this.handleSubmit}>Logging In</button>
          </div>
        ) : (
          <div className="field">
            <button onClick={this.handleSubmit}>Log In</button>
          </div>
        )}
      </form>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(LogIn);
