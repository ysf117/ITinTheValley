/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Tabs from './MainTabPage';


export default class sampleNavigator extends Component {
  render() {
    return (
 <Tabs/>
    );
  }
}


AppRegistry.registerComponent('sampleNavigator', () => sampleNavigator);
