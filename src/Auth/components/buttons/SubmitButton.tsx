import React, { StatelessComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../../../constants/colors';

export interface ISubmitButton {
  isSignupForm?: boolean;
}

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

const SubmitButton: StatelessComponent<ISubmitButton> = ({ isSignupForm }) => {
  return (
    <TouchableOpacity
      style={styles.mainButton}
      onPress={isSignupForm ? this.handleSignUp : this.handleSignIn}>
      <Text
        style={styles.mainButtonText}>{isSignupForm ? 'Sign up' : 'Sign in'}</Text>
    </TouchableOpacity>
  );
};

SubmitButton.defaultProps = {
  isSignupForm: false,
};

export default SubmitButton;
