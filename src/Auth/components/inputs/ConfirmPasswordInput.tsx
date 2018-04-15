import React from 'react';
import BaseTextInput from './BaseTextInput';

const ConfirmPasswordInput = ({ confirmPassword, onConfirmPasswordChange }) => (
  <BaseTextInput
    value={confirmPassword}
    placeholder="Confirm password"
    onChangeText={onConfirmPasswordChange}
  />
);

export default ConfirmPasswordInput;
