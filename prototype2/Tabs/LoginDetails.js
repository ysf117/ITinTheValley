import React, {Component} from 'react'
import {StyleSheet, View, Text, Image} from 'react-native';
 
export default class LoginDetails extends Component{
    constructor(props){
        super(props)
        const {navigation} = this.props;
      //  let yy = navigation.getParam("params"); 

        this.state=navigation.getParam("params")
    }
    render(){
      // the welcome page 
        return ( 
          <View style={styles.container}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text style={styles.paragraph}> Welcome {this.state.name} to our mobile application!</Text>
                 <Image style={styles.logo} source={require('../assets/Logo.png')} />
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  logo: {
   textAlign: 'center',
    height: 300,
    width: 300,
  },
  container: {
        backgroundColor: '#ecf0f1'
    },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})