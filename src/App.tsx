import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store';
import colors from './constants/colors';
import DIMENSIONS from './constants/dimensions';
import Auth from './Auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: DIMENSIONS.WINDOW_HEIGHT * 0.1,
    alignItems: 'center',
    backgroundColor: colors.beach5,
  },
});

// GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

const store = configureStore({});
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Auth />
        </View>
      </Provider>
    );
  }
}
