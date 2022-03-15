import React, { Component } from 'react';
import Photographs from './Photographs'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Tab3Page4 extends Component {

    static navigationOptions = {
        title: 'Photographs',
      };
  render(){
        return(
            <Photographs id='1'/>
            
        )
        
    }
  
    
}

