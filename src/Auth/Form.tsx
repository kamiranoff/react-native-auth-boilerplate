import React, { Component } from 'react';
import { View } from 'react-native';
import EmailInput from './components/inputs/EmailInput';
import PasswordInput from './components/inputs/PasswordInput';
import ConfirmPasswordInput from './components/inputs/ConfirmPasswordInput';

export interface IForm {
  isSignupForm?: boolean;
}

export interface IFormState {
  email: string;
  password: string;
  confirmPassword: string;
  error: {
    email: string;
    password: string[],
    confirmPassword: string,
  };
}

class Form extends Component<IForm, IFormState> {

  static defaultProps = {
    isSignupForm: false,
  };

  state = {
    email: '',
    password: '',
    confirmPassword: '',
    error: {
      email: '',
      password: [],
      confirmPassword: '',
    },
  };

  validateEmail = (email: string) => {
    // tslint:disable-next-line:max-line-length
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
  };

  validatePassword = (password: string) => {
    let errors: string[] = [];

    if (password.length < 8) {
      errors.push('Your password must be at least 8 characters');
    }
    if (password.search(/[a-z]/i) < 0) {
      errors.push('Your password must contain at least one letter.');
    }
    if (password.search(/[0-9]/) < 0) {
      errors.push('Your password must contain at least one digit.');
    }

    return errors;
  };

  handleEmailChange = (email) => {
    this.setState({ email, error: { ...this.state.error, email: '' } });
  };

  handleEmailBlur = () => {
    const isValidEmail = this.validateEmail(this.state.email.toLowerCase());
    if (!isValidEmail) {
      return this.setState({ error: { ...this.state.error, email: 'Invalid email format' } });
    }
  };

  handlePasswordChange = (password) => {
    this.setState({ password, error: { ...this.state.error, password: [] } });
  };

  handlePasswordBlur = () => {
    const errors = this.validatePassword(this.state.password);

    if (errors) {
      this.setState({ error: { ...this.state.error, password: errors } });
    }
  };

  handleConfirmPasswordBlur = () => {
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ error: { ...this.state.error, confirmPassword: 'Passwords don\'t match' } });
    }
  };

  handleConfirmPasswordChange = (confirmPassword) => {
    this.setState({ confirmPassword, error: { ...this.state.error, confirmPassword: '' } });
  };

  render() {
    const { isSignupForm } = this.props;
    const { email, password, confirmPassword, error } = this.state;
    console.log(error);
    return (
      <View>
        <EmailInput
          value={email}
          onChangeText={this.handleEmailChange}
          onBlur={this.handleEmailBlur}
          errorMessages={error.email}
        />
        <PasswordInput
          onChangeText={this.handlePasswordChange}
          isSignupForm={isSignupForm}
          value={password}
          onBlur={this.handlePasswordBlur}
          errorMessages={error.password}
          secureTextEntry
        />
        {isSignupForm &&
        <ConfirmPasswordInput
          onBlur={this.handleConfirmPasswordBlur}
          onChangeText={this.handleConfirmPasswordChange}
          value={confirmPassword}
          errorMessages={error.confirmPassword}
          secureTextEntry
        />
        }
      </View>
    );
  }
}

export default Form;
