import React from 'react';
import colors from '../../../constants/colors';
import { Button, ButtonProperties } from 'react-native';

export interface IForgotPasswordButton extends Partial<ButtonProperties> {
  onPress: () => void;
}

const ForgotPasswordButton = (props: IForgotPasswordButton) => {
  return (
    <Button
      title="forgot password ?"
      color={colors.beach1}
      {...props}
    />
  );
};

export default ForgotPasswordButton;
