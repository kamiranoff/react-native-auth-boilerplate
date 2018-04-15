import React, { Component } from 'react';
import { View } from 'react-native';
import EmailInput from './components/inputs/EmailInput';
import PasswordInput from './components/inputs/PasswordInput';
import ConfirmPasswordInput from './components/inputs/ConfirmPasswordInput';
import SubmitButton from './components/buttons/SubmitButton';
import { isValidEmail, validatePassword, areValuesIdentical } from './validators';

export interface IForm {
  isSignupForm?: boolean;
  handleSubmit: (email: string, password: string) => void;
}

export interface IFormState {
  email: string;
  password: string;
  confirmPassword: string;
  emailError: string;
  passwordError: string[];
  confirmPasswordError: string;
}

class Form extends Component<IForm, IFormState> {

  static defaultProps = {
    isSignupForm: false,
  };

  state = {
    email: '',
    password: '',
    confirmPassword: '',
    emailError: '',
    passwordError: [],
    confirmPasswordError: '',
    errorVisible: false,
  };

  isNotFilled = () => {
    const { isSignupForm } = this.props;
    const { email, password, confirmPassword } = this.state;
    const isSignUpNotFilled = isSignupForm && (!email || !password || !confirmPassword);

    if (isSignUpNotFilled) {
      return true;
    } else if (!email || !password) {
      return true;
    }
    return false;
  };

  isInError = () => {
    const { isSignupForm } = this.props;
    const { emailError, passwordError, confirmPasswordError } = this.state;
    const isSignupInError = isSignupForm && (emailError || passwordError.length > 0 || confirmPasswordError);

    if (isSignupInError) {
      return true;
    } else if (emailError || passwordError.length > 0) {
      return true;
    }
    return false;
  };

  validateEmail = () => {
    if (!isValidEmail(this.state.email.toLowerCase())) {
      return this.setState({ emailError: 'Invalid email format' });
    }
  };

  validatePassword = () => {
    const passwordError = validatePassword(this.state.password);
    const isValidPassword = passwordError.length === 0;
    if (!isValidPassword) {
      return this.setState({ passwordError });
    }
  };

  validateConfirmPassword = () => {
    const { password, confirmPassword } = this.state;
    if (!areValuesIdentical(password, confirmPassword)) {
      return this.setState({ confirmPasswordError: 'Passwords don\'t match' });
    }
  };

  validateForm = () => {
    this.validateEmail();
    this.validatePassword();
    if (this.props.isSignupForm) {
      this.validateConfirmPassword();
    }
  };

  handleEmailChange = (email) => {
    this.setState({ email, emailError: '' });
  };

  handlePasswordChange = (password) => {
    this.setState({ password, passwordError: [] });
  };

  handleConfirmPasswordChange = (confirmPassword) => {
    this.setState({ confirmPassword, confirmPasswordError: '' });
  };

  isSubmitButtonDisabled = () => {
    return !!(this.isInError() || this.isNotFilled());
  };

  handleSubmit = () => {
    const { email, password, confirmPassword } = this.state;
    const passwordError = validatePassword(password);
    let confirmPasswordError = false;
    if (this.props.isSignupForm) {
      confirmPasswordError = !areValuesIdentical(password, confirmPassword);
    }
    if (isValidEmail(email) && passwordError.length === 0 && !confirmPasswordError) {
      this.props.handleSubmit(email, password);
    } else {
      this.validateForm();
    }
  };

  render() {
    const { isSignupForm } = this.props;
    const { email, password, confirmPassword, emailError, confirmPasswordError, passwordError } = this.state;
    return (
      <View>
        <EmailInput
          value={email}
          onChangeText={this.handleEmailChange}
          onBlur={this.validateEmail}
          errorMessages={emailError}
        />
        <PasswordInput
          onChangeText={this.handlePasswordChange}
          isSignupForm={isSignupForm}
          value={password}
          onBlur={this.validatePassword}
          errorMessages={passwordError}
          secureTextEntry
        />
        {isSignupForm &&
        <ConfirmPasswordInput
          onBlur={this.validateConfirmPassword}
          onChangeText={this.handleConfirmPasswordChange}
          value={confirmPassword}
          errorMessages={confirmPasswordError}
          secureTextEntry
        />
        }
        <SubmitButton
          disabled={this.isSubmitButtonDisabled()}
          isSignupForm={isSignupForm}
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

export default Form;
