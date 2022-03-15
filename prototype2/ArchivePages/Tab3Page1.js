import React, { Component } from 'react';
import Author from './Authors';

import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class Tab3Page1 extends Component {
  static navigationOptions = {
    title: 'Authors',
  };
  render() {
    return <Author id="1"/>;
    
  }
}




