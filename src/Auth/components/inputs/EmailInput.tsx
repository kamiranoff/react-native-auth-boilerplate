import React from 'react';
import { StyleSheet } from 'react-native';
import BaseTextInput, { IBaseTextInput } from './BaseTextInput';

export interface IEmailInput extends IBaseTextInput {
}

const styles = StyleSheet.create({
  input: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
});

const EmailInput = (props: IEmailInput) => (
  <BaseTextInput
    withBorderBottom
    style={styles.input}
    placeholder="Email"
    {...props}
  />
);

export default EmailInput;
