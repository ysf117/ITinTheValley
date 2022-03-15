import React, {Component} from 'react';
import {StyleSheet, FlatList, View, Text, Image} from 'react-native'
export default class Author extends Component{

  constructor(props){
    super(props) 
    this.state = {}
  }

  componentWillMount(){
    var authorData;
    switch(this.props.id){
      case '1':
        authorData = require('../assets/journalist/JohnDoe.json');
        break;
      case '2':
        authorData = require('../assets/journalist/BobRoss.json');
        break;
      case '3':
        authorData = require('../assets/journalist/LaraLui.json');
        break;
      
    }
    this.setState({
      work:authorData.work,
      name:authorData.name,
      id:authorData.id,
      picture:authorData.picture
      })

  }
    render(){
     let pic = {
     uri: this.state.picture
   };
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{this.state.name} 
        </Text>
        
       <Image source = {pic} style={styles.picture}/>
        <Text style={styles.publishdate}>Stories written</Text>
        <FlatList style={styles.list}
          data={this.state.work}
          renderItem={({item})=><Text>{item.title},{item.publish_date}</Text>}
          keyExtractor={(item,index)=>item.title}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{marginTop:30,backgroundColor: '#ecf0f1'},
  name:{fontSize:20, paddingBottom:10},
  picture:{width:150,height:200},
  list:{paddingTop:20},
  publishdate:{fontSize:15,paddingTop:20}
});