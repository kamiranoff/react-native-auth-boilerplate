import React, { Component } from 'react';
import { View } from 'react-native';

import AuthButtons from './components/buttons/AuthButtons';
import Form from './Form';
import SubmitButton from './components/buttons/SubmitButton';
import ForgotPasswordButton from './components/buttons/ForgotPasswordButton';
import ErrorMessage from './components/texts/ErrorMessage';

export type TAuthForm = 'signin' | 'signup';

export const SIGN_IN = 'signin';
export const SIGN_UP = 'signup';

class Auth extends Component {
  state = {
    activeForm: 'signin' as TAuthForm,
    error: '',
  };

  handleFormSelection = (form: TAuthForm) => {
    this.setState({ activeForm: form });
  };

  handleSubmit = () => {
    const isSignupForm = this.state.activeForm === SIGN_UP;
    if (isSignupForm) {
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

  handleForgotPassword = () => {
    console.log('handleForgotPassword - not yet implemented');
  };

  render() {
    const isSignupForm = this.state.activeForm === SIGN_UP;
    return (
      <View>
        <AuthButtons
          handlePress={this.handleFormSelection}
          activeForm={this.state.activeForm}
        />
        <Form isSignupForm={isSignupForm} />
        <SubmitButton
          isSignupForm={isSignupForm}
          onPress={this.handleSubmit}
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