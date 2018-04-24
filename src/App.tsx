import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import Entry from './Entry';

// GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

const store = configureStore({});
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Entry />
      </Provider>
    );
  }
}
