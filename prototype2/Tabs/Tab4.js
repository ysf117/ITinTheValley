/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';
var {height, width} = Dimensions.get('window');
export default class Tab4 extends Component {
  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            width: width-20,
          alignItems:'center',
          margin:10,
          borderWidth:3,
          borderColor:'red',
          backgroundColor:'#353539',
          height: 50
        }}
        onPress={ () => navigate('Tab4Page1')}
        >
          <Text style={styles.button}>
            Advertisers
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: width-20,
          alignItems:'center',
          margin:10,
          borderWidth:3,
          borderColor:'red',
          backgroundColor:'#353539',
          height: 50
        }} 
        onPress={ () => navigate('Tab4Page2')}
        >
          <Text style={styles.button}>
            Adverts
          </Text>

        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 25,
    backgroundColor: '#ecf0f1',
    paddingTop: 5
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  button: {
    flex: 1,
    fontSize: 25,
    backgroundColor: '#353539',
    paddingTop: 5,
    color:'white'
  }
});
