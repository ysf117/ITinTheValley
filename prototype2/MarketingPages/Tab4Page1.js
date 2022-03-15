/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MarketingList from './Advertisers.js'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Tab4Page1 extends Component {

    static navigationOptions = {
        title: 'Advertisers',
      };
  render(){
        return(
          
            <MarketingList/>
            
        )
    }
}

