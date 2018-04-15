import React, { StatelessComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../../../constants/colors';

export interface ISubmitButton {
  isSignupForm?: boolean;
  onPress: () => void;
  disabled?: boolean;
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
  disabled: {
    opacity: 0.5,
  },
});

const SubmitButton: StatelessComponent<ISubmitButton> = ({ isSignupForm, onPress, disabled }) => (
  <TouchableOpacity
    style={[styles.mainButton, disabled && styles.disabled]}
    onPress={onPress}
    disabled={disabled}
  >
    <Text
      style={styles.mainButtonText}>{isSignupForm ? 'Sign up' : 'Sign in'}</Text>
  </TouchableOpacity>
);

SubmitButton.defaultProps = {
  isSignupForm: false,
  disabled: true,
};

export default SubmitButton;
