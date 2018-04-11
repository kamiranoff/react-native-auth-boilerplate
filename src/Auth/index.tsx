import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import colors from '../constants/colors';
import AuthButtons from './AuthButtons';
import AuthFormView from './AuthFormView';

export type TAuthForm = 'signin' | 'signup';

const styles = StyleSheet.create({
  mainButton: {
    backgroundColor: colors.beach2,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  mainButtonText: {
    color: colors.beach5,
    fontSize: 16,
  },
});

export const SIGN_IN = 'signin';
export const SIGN_UP = 'signup';

class Auth extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    activeForm: 'signin' as TAuthForm,
  };

  handleEmailChange = (email) => {
    this.setState({ email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  handleFormSelection = (form: TAuthForm) => {
    this.setState({ activeForm: form });
  };

  handleConfirmPasswordChange = (confirmPassword) => {
    this.setState({ confirmPassword });
  };

  handleSubmitForm = () => {
    console.log(this.state);
  };

  render() {
    return (
      <View>
        <View>
          <AuthButtons
            handlePress={this.handleFormSelection}
            activeForm={this.state.activeForm}
          />
          <AuthFormView
            email={this.state.email}
            password={this.state.password}
            onEmailChange={this.handleEmailChange}
            onPasswordChange={this.handlePasswordChange}
            onConfirmPasswordChange={this.handleConfirmPasswordChange}
            signup={this.state.activeForm === SIGN_UP}
          />
          <TouchableOpacity
            style={styles.mainButton}
            onPress={this.handleSubmitForm}>
            <Text style={styles.mainButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Auth;