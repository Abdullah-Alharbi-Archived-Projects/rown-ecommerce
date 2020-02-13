import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email & password.</span>

        <form onSubmit={this.handleSubmit} autoComplete="off">
          <FormInput
            handleChange={this.handleChange}
            name="email"
            id="email"
            label="Email"
            value={email}
            type="email"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            name="password"
            id="password"
            label="Password"
            value={password}
            type="password"
            required
          />
          {/* <input type="submit" value="Sign in" /> */}
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
