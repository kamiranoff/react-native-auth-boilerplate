import React, { Component } from 'react';
import EmailInput from './components/inputs/EmailInput';
import PasswordInput from './components/inputs/PasswordInput';
import { View } from 'react-native';
import ConfirmPasswordInput from './components/inputs/ConfirmPasswordInput';

export interface IForm {
  isSignupForm?: boolean;
}

class Form extends Component<IForm> {

  static defaultProps = {
    isSignupForm: false,
  };

  state = {
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
  };

  validateEmail = (email: string) => {
    // tslint:disable-next-line:max-line-length
    const regex = new RegExp('/^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/');
    return regex.test(email);
  };

  handleEmailBlur = () => {

  };

  handleEmailChange = (email) => {
    if (this.validateEmail(email)) {
      return this.setState({ email });
    }

    return this.setState({ error: 'Invalid email format' });
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  handleConfirmPasswordChange = (confirmPassword) => {
    this.setState({ confirmPassword });
  };

  render() {
    const { isSignupForm } = this.props;
    return (
      <View>
        <EmailInput
          email={this.state.email}
          onEmailChange={this.handleEmailChange}
          onBlurEmail={this.handleEmailBlur}
        />
        <PasswordInput
          onPasswordChange={this.handlePasswordChange}
          isSignupForm={isSignupForm}
          password={this.state.email}
        />
        {isSignupForm &&
        <ConfirmPasswordInput
          onConfirmPasswordChange={this.handleConfirmPasswordChange}
          confirmPassword={this.state.confirmPassword}
        />
        }
      </View>
    );
  }
}

export default Form;
