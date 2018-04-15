import React, { StatelessComponent } from 'react';
import { Dimensions, StyleSheet, TextInput, TextInputProperties } from 'react-native';
import colors from '../../../constants/colors';

export interface IBaseTextInput extends TextInputProperties {
  withBorderBottom?: boolean;
}

const heightyPercent = Dimensions.get('window').width * 0.8;
const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: heightyPercent,
    backgroundColor: colors.beach1,
  },
  borderBottom: {
    borderBottomColor: colors.beach2,
    borderBottomWidth: 1,
  },
});

const BaseTextInput: StatelessComponent<IBaseTextInput> = ({ withBorderBottom, style, ...props }) => (
  <TextInput
    style={[styles.input, withBorderBottom && styles.borderBottom, style]}
    {...props}
  />
);

BaseTextInput.defaultProps = {
  withBorderBottom: false,
};

export default BaseTextInput;
