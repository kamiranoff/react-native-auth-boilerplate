import React, { StatelessComponent } from 'react';
import BaseTextInput from './BaseTextInput';

export interface IPasswordInput {
  password: string;
  onPasswordChange: (password: string) => void;
  isSignupForm?: boolean;
}

const PasswordInput: StatelessComponent<IPasswordInput> = ({ onPasswordChange, password, isSignupForm }) => (
  <BaseTextInput
    onChangeText={onPasswordChange}
    value={password}
    withBorderBottom={isSignupForm}
    placeholder="Password"
  />
);

PasswordInput.defaultProps = {
  isSignupForm: false,
};

export default PasswordInput;
