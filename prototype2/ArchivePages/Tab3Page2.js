import React, { Component } from 'react';
import Stories from './Stories';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class Tab3Page1 extends Component {
  static navigationOptions = {
    title: 'Stories',
  };
  render() {
    return <Stories />;
  }
}




