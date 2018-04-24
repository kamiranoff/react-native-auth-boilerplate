import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import colors from './constants/colors';
import DIMENSIONS from './constants/dimensions';
import Auth from './Auth';
import Home from './Home';

export interface IEntry {
  isSignedIn: boolean;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: DIMENSIONS.WINDOW_HEIGHT * 0.1,
    alignItems: 'center',
    backgroundColor: colors.beach5,
  },
});

class Entry extends Component<IEntry> {
  render() {
    return (
      <View style={styles.container}>
        {this.props.isSignedIn ? <Home /> : <Auth />}
      </View>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps)(Entry);