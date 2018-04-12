import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Button } from 'react-native';

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
  forgotPasswordContainer: {
    marginTop: 15,
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

  handleSignIn = () => {
    console.log('handleSignIn', this.state);
  };

  handleSignUp = () => {
    console.log('handleSignUp', this.state);
  };

  render() {
    const isSignUp = this.state.activeForm === SIGN_UP;
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
            signup={isSignUp}
          />
          <TouchableOpacity
            style={styles.mainButton}
            onPress={isSignUp ? this.handleSignUp : this.handleSignIn}>
            <Text style={styles.mainButtonText}>{isSignUp ? 'Sign up' : 'Sign in'}</Text>
          </TouchableOpacity>

          <View style={styles.forgotPasswordContainer}>
            <Button
              title="forgot passowrd ?"
              onPress={() => console.log('not implemented')}
              color={colors.beach1}
            />
          </View>

        </View>
      </View>
    );
  }
}

export default Auth;