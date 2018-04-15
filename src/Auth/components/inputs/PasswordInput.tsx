import React, { StatelessComponent } from 'react';
import BaseTextInput, { IBaseTextInput } from './BaseTextInput';

export interface IPasswordInput extends IBaseTextInput {
  isSignupForm?: boolean;
}

const PasswordInput: StatelessComponent<IPasswordInput> = ({isSignupForm, ...props }) => (
  <BaseTextInput
    withBorderBottom={isSignupForm}
    placeholder="Password"
    {...props}
  />
);

PasswordInput.defaultProps = {
  isSignupForm: false,
};

export default PasswordInput;
