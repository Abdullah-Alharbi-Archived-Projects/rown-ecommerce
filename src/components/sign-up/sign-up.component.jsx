import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";

class SignUp extends Component {
  state = {
    displayName: "",
    emailSignUp: "",
    passwordSignUp: "",
    confirmPassword: ""
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handleSubmit = async e => {
    e.preventDefault();
    const {
      displayName,
      emailSignUp,
      passwordSignUp,
      confirmPassword
    } = this.state;

    if (passwordSignUp !== confirmPassword)
      return alert("Passwords don't match.");

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        emailSignUp,
        passwordSignUp
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        emailSignUp: "",
        passwordSignUp: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error("Unable to createUserWithEmailAndPassword.", error);
    }
  };

  render() {
    const {
      displayName,
      emailSignUp,
      passwordSignUp,
      confirmPassword
    } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account.</h2>
        <span>Sign up with your email & password</span>
        <form
          method="POST"
          onSubmit={this.handleSubmit}
          className="sign-up-form"
          autoComplete="off"
        >
          <FormInput
            type="text"
            id="displayName"
            name="displayName"
            label="Display Name"
            value={displayName}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            id="emailSignUp"
            name="emailSignUp"
            label="Email"
            value={emailSignUp}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            id="passwordSignUp"
            name="passwordSignUp"
            label="Password"
            value={passwordSignUp}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
