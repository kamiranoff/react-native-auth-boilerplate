import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import colors from './constants/colors';
import DIMENSIONS from './constants/dimensions';
import Auth from './Auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: DIMENSIONS.WINDOW_HEIGHT * 0.1,
    alignItems: 'center',
    backgroundColor: colors.beach5
  }
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Auth />
      </View>
    );
  }
}
