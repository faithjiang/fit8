import React, { Component } from "react";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
import "./login.css";

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      email_input: "",
      password_input: ""
    };
  }

  validateForm = (e) => {
    e.preventDefault();
    const postData = {
      email: this.state.email_input,
      password: this.state.password_input
    }

    axios.post('http://localhost:3001/login', postData, {withCredentials:true})
      .then(res => {
        if (res.status === 200){
          window.location = '/dashboard';
        }
      }).catch(err => {
        console.log(err);
      });
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    return(
      <form className="Login">
      <div className="form-group form-header">
        <h1>Login</h1>
      </div>
      <div className="form-group form-header">
        <h6>New to Fit8? <a href="/signup" className="form-a">Sign Up for Free</a></h6>
      </div>

      <div className="form-group">
        <input type="email" className="form-control form-control-lg" value={this.state.email_input} onChange={this.handleChange} id="email_input" placeholder="Email address" />
      </div>
      <div className="form-group">
        <div className="password">
          <input type="password" className="form-control form-control-lg" value={this.state.password_input} onChange={this.handleChange} id="password_input" placeholder="Password" />
        </div>
      </div>
      <div className="form-group" id="forgot_password">
        <small><a href="/forgot" > Forgot?</a></small>
      </div>
      <div className="form-group">
        <div className="checkbox checkbox-circle">
          <input type="checkbox" id="check_remember" />
          <label htmlFor="check_remember">Remember Me</label>
        </div>
      </div>

      <div className="form-group">
          <button className="btn-primary" onClick={this.validateForm}>Log in</button>
          <small>OR</small>
          <button className="btn-facebook" onClick={this.validateForm}>Log in with Facebook</button>
      </div>
      </form>
    );
  }
}

export default Login;
