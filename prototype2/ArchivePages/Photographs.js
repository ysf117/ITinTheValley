import React, {Component} from 'react';
import {StyleSheet, FlatList, View, Text, Image} from 'react-native'
export default class Photo extends Component{

  constructor(props){
    super(props) 
    this.state = {}
  }

  componentWillMount(){
    var photoData;
    switch(this.props.id){
      case '1':
        photoData = require('../assets/photographer/Serena.json');
        break;
      case '2':
        photoData = require('../assets/photographer/SamSmith.json');
        break;
      case '3':
        photoData = require('../assets/photographer/JackWhite.json');
        break;
      case '4':
        photoData = require('../assets/photographer/Rachel.json');
        break;
      
    }
    this.setState({
      work:photoData.work,
      name:photoData.name,
      id:photoData.id,
      picture:photoData.picture,
      description:photoData.description
      })

  }
    render(){
     let pic = {
     uri: this.state.picture
   };
    return (
      <View style={styles.container}>
        <Text style={styles.name}>Photography By {this.state.name}
        </Text>
        
       <Image source = {pic} style={styles.picture}/>
        <FlatList style={styles.list}
          data={this.state.work}
          renderItem={({item})=><Text>{item.description}</Text>}
          keyExtractor={(item,index)=>item.description}
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



