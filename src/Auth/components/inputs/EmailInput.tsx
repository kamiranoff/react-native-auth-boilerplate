import React from 'react';
import { StyleSheet } from 'react-native';
import BaseTextInput from './BaseTextInput';

export interface IEmailInput {
  email: string;
  onEmailChange: (email: string) => void;
  onBlurEmail: () => void;
}

const styles = StyleSheet.create({
  input: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
});

const EmailInput = ({ email, onEmailChange, onBlurEmail }: IEmailInput) => (
  <BaseTextInput
    value={email}
    onChangeText={onEmailChange}
    onBlur={onBlurEmail}
    withBorderBottom
    style={styles.input}
    placeholder="Email"
  />
);

export default EmailInput;
