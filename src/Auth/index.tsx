import React, { Component } from 'react';
import { View } from 'react-native';

import AuthButtons from './components/buttons/AuthButtons';
import Form from './Form';
import ForgotPasswordButton from './components/buttons/ForgotPasswordButton';
import ErrorMessage from './components/texts/ErrorMessage';

export type TAuthForm = 'signin' | 'signup';

export const SIGN_IN = 'signup';
export const SIGN_UP = 'signup';

export interface IAuthState {
  activeForm: TAuthForm;
  error: string;
}

class Auth extends Component<{}, IAuthState> {
  state = {
    activeForm: 'signin' as TAuthForm,
    error: '',
  };

  handleFormSelection = (form: TAuthForm) => {
    this.setState({ activeForm: form });
  };

  handleForgotPassword = () => {
    console.log('handleForgotPassword - not yet implemented');
  };

  handleSubmit = (email: string, password: string) => {
    if (this.state.activeForm === SIGN_UP) {
      return this.handleSignup();
    }
    this.handleSignin();
  };

  handleSignin = () => {
    console.log('handleSignIn', this.state);
  };

  handleSignup = () => {
    console.log('handleSignUp', this.state);
  };

  render() {
    const { activeForm } = this.state;
    const isSignupForm = activeForm === SIGN_UP;
    return (
      <View>
        <AuthButtons
          handlePress={this.handleFormSelection}
          isSignupForm={isSignupForm}
        />
        <Form
          isSignupForm={isSignupForm}
          handleSubmit={this.handleSubmit}
        />
        <ErrorMessage error={this.state.error} />
        <ForgotPasswordButton
          onPress={this.handleForgotPassword}
        />
      </View>
    );
  }
}

export default Auth;