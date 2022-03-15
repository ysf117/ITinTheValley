import React, {Component} from 'react'
import {StyleSheet, View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import { StackNavigator} from "react-navigation";
import LoginDetails from "./LoginDetails";
 
class App extends Component {
    constructor() {   //comments?
        super()
        // able to input data
        this.state={
		  	username:"",
		  	password:"",
		};
    }
    //comments?
    toLogin = () => {
        let username = this.state.username
        let password = this.state.password
        if (username == "admin" && password == "123"){
            this.props.navigation.push('LoginDetails',  //comments?
            {
            params:{
              name:username,
              password:password              
            },
        })
              }else if (username == "staff" && password == "password"){
            this.props.navigation.push('FifthPage',  //comments?
            {
            params:{
              name:username,
              password:password              
            },
        })
        }else {
            alert('Username or password is wrong')
        }
    };
 
    static navigationOptions = {
       header:null,  //hide
      //  title: 'IT in the valley', - as theres already navigation tab
    };
 

 ////layout & format of the text boxes and button -> for the form
    render() {
        return (
            <View style={styles.container}>
             <View style={styles.container}>
      
        
       <Image  style={{width: 300, height: 300}} source={require('../assets/Logo.png')} />
      </View>
                <View style={styles.lineTopBottom}>
                    <Text>Username:</Text>
                    <TextInput style={styles.textInput}
                               onChangeText={(username) => this.setState({username})}/>
                </View>
                <View style={styles.lineTopBottom}>
                    <Text>Password:</Text>
                    <TextInput style={styles.textInput} secureTextEntry={true}
                               onChangeText={(password) => this.setState({password})}/>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={this.toLogin}>Log in</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
 
const styles = StyleSheet.create({
    container: {
      
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1'
    },
    textInput: {
        marginLeft: 5,
        width: 200,
    },
    lineTopBottom: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 45,
        borderBottomWidth: 1,
        borderBottomColor: '#D0D0D0',
    },
    button: {
        justifyContent: 'center',
        marginTop: 10,
        width: 100,
        height: 40,
        borderRadius: 20,
        backgroundColor: "red",
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    }
  }
)
 
const HomeScreen = StackNavigator({
  Home: { screen: App },
  LoginDetails: { screen: LoginDetails },
  
});

export default HomeScreen;