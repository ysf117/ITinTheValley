import React, { Component } from 'react';
import Adverts from './Ads.js'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Tab4Page1 extends Component {
  static navigationOptions = {
    title: 'Adverts',
  };
  render(){
        return(
            <Adverts advertisers='Apple'/>
            
        )
    }
}


