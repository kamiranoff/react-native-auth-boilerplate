import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

export interface IErrorMessage {
  error: string;
}

const styles = StyleSheet.create({
    text: {
      color: colors.error1,
      fontSize: 12,
    },
  });

const ErrorMessage = ({ error }: IErrorMessage) => (
  <Text style={styles.text}>{error}</Text>
);

export default ErrorMessage;
