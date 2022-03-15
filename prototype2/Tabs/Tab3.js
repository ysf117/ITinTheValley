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
export default class Tab3 extends Component {
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
        onPress={ () => navigate('Tab3Page1')}
        >
          <Text style={styles.button}>
            Authors
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
        onPress={ () => navigate('Tab3Page2')}
        >
          <Text style={styles.button}>
            Stories
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
        onPress={ () => navigate('Tab3Page3')}
        >
          <Text style={styles.button}>
            Images
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
        onPress={ () => navigate('Tab3Page4')}
        >
          <Text style={styles.button} >
            Photographs
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
  button: {
    flex: 1,
    fontSize: 25,
    backgroundColor: '#353539',
    paddingTop: 5,
    color:'white'
  }
 
});
