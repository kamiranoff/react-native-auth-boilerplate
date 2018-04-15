import React from 'react';
import BaseTextInput, { IBaseTextInput } from './BaseTextInput';

export interface IConfirmPasswordInput extends IBaseTextInput {
}

const ConfirmPasswordInput = (props: IConfirmPasswordInput) => (
  <BaseTextInput
    placeholder="Confirm password"
    {...props}
  />
);

export default ConfirmPasswordInput;
