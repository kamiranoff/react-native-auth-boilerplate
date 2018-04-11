import React, { StatelessComponent } from 'react';
import { Dimensions, StyleSheet, TextInput, View } from 'react-native';

export interface IAuthFormView {
  email: string;
  password: string;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onConfirmPasswordChange?: (password: string) => void;
  confirmPassword?: string;
  signup?: boolean;
}

const heightyPercent = Dimensions.get('window').width * 0.8;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECEFF1',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: heightyPercent
  },
  borderBottom: {
    borderBottomColor: '#B0BEC5',
    borderBottomWidth: 1
  }
});

const AuthFormView: StatelessComponent<IAuthFormView> = ({
  email,
  password,
  confirmPassword,
  onEmailChange,
  onPasswordChange,
  onConfirmPasswordChange,
  signup,
}) => (
  <View style={styles.container}>
    <TextInput
      value={email}
      placeholder="Email"
      style={[styles.input, styles.borderBottom]}
      onChangeText={onEmailChange}
    />
    <TextInput
      value={password}
      placeholder="Password"
      style={[styles.input, signup && styles.borderBottom]}
      onChangeText={onPasswordChange}
    />
    {signup ? (
      <TextInput
        value={confirmPassword}
        placeholder="Confirm password"
        style={styles.input}
        onChangeText={onConfirmPasswordChange}
      />
    ) : null}
  </View>
);

AuthFormView.defaultProps = {
  email: '',
  password: '',
  confirmPassword: '',
  signup: false
};

export default AuthFormView;
