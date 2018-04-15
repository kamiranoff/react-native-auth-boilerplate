import React, { StatelessComponent } from 'react';
import { Dimensions, StyleSheet, TextInput, TextInputProperties, TextStyle, View } from 'react-native';
import colors from '../../../constants/colors';
import ErrorMessage from '../texts/ErrorMessage';

export interface IBaseTextInput extends TextInputProperties {
  withBorderBottom?: boolean;
  errorMessages?: string | string[];
  inputStyle?: TextStyle;
}

const heightyPercent = Dimensions.get('window').width * 0.8;
const styles = StyleSheet.create({
  container: {
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

const renderError = (errorMessages) => {
  if (!errorMessages) {
    return null;
  }

  if (typeof errorMessages === 'string') {
    return <ErrorMessage error={errorMessages} />;
  }

  return errorMessages.map((error, i) => (
    <ErrorMessage key={`passwordErrorMessage-${i}`} error={error} />
  ));
};

const BaseTextInput: StatelessComponent<IBaseTextInput> = ({
                                                             withBorderBottom,
                                                             style,
                                                             errorMessages,
                                                             inputStyle,
                                                             ...props,
                                                           }) => (
  <View style={[styles.container, withBorderBottom && styles.borderBottom, style]}>
    <TextInput
      style={inputStyle}
      {...props}
    />
    {renderError(errorMessages)}
  </View>
);

BaseTextInput.defaultProps = {
  withBorderBottom: false,
  errorMessages: '',
};

export default BaseTextInput;
