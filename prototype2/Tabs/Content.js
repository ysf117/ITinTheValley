import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';


export default class WelcomePage extends React.Component {
   render() {
    return (
       // stating the departments
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ecf0f1', padding: 8}}>
   <View style={{flex:1, backgroundColor:"#FFFE7B", Height: 200}}>
    <Text style={{ fontWeight: 'bold', }}>Accounts Department</Text>
    <Text> Manages the finances of the magazine and ensures all parties involved are paid their pre-decided rate for the work that they have done. Either that be written the story or taking a picture to capture the message trying to be conveyed. (Go to the Employee Accounts)</Text>
    </View>

      <View style={{flex:1, backgroundColor:"#A3FFBE", Height: 200}}>
    <Text style={{ fontWeight: 'bold', }}>Editing Department</Text>
    <Text> Focuses on the capturing of the stories, the stories are filtered by the author/journalists name. (Go to the Story Finder) </Text>
    </View>

    <View style={{flex:1, backgroundColor:"#90F1FD", Height: 200}}>
    <Text style={{ fontWeight: 'bold', }}>Marketing Department</Text>
    <Text> Handels the advertising the magazine does for other companies. (Go to the marketing tab)</Text>
    </View>

    <View style={{flex:1, backgroundColor: "#C264FB", Height: 200}}>
    <Text style={{ fontWeight: 'bold', }}>Processing Centre </Text>
    <Text> Looks over all the departments to maintain order and consistency in the data.</Text>
    </View>
  </View>
    );
  }
}