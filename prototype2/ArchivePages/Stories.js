import React, {Component} from 'react';
import {StyleSheet, FlatList, View, Text, Image, ScrollView,SafeAreaView,WebView} from 'react-native'
import Constants from 'expo-constants';
export default class Stories extends Component {
 

    constructor(props){
    super(props) 
    this.state = {}
  }

  componentWillMount(){
    var storyData;
    storyData = require('../assets/journalist/stories.json');
    this.setState({
      stories:storyData.stories,
      title:storyData.title,
      name: storyData.name,
      story: storyData.story
      })

  }


  render(){
    return (
      <View style={{backgroundColor: '#ecf0f1', marginTop:30, marginLeft:20 }}>
        <Text style={styles.title}>Stories</Text>
        <FlatList style={styles.list}
          data={this.state.stories}
          renderItem={({item})=><Text>{item.title}, by {item.name}{'\n'}{item.story}{'\n'}{'\n'}</Text>}
        />
      </View>
    );
  }


}



const styles = StyleSheet.create({
  title:{fontSize:30},
  list:{paddingTop:15},

});