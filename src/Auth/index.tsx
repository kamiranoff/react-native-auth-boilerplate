import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Button } from 'react-native';

import colors from '../constants/colors';
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
    email: '',
    password: '',
    confirmPassword: '',
    activeForm: 'signin' as TAuthForm,
    error: '',
  };

  handleFormSelection = (form: TAuthForm) => {
    this.setState({ activeForm: form });
  };

  handleSignIn = () => {
    console.log('handleSignIn', this.state);
  };

  handleSignUp = () => {
    console.log('handleSignUp', this.state);
  };

  handleForgotPassword = () => {
    console.log('not yet implemented');
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