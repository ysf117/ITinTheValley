import React, {Component} from 'react';
import {StyleSheet, FlatList, View, Text, Image} from 'react-native'
export default class ads extends Component{

  constructor(props){
    super(props) 
    this.state = {}
  }

  componentWillMount(){
    var adsData;
    switch(this.props.id){
      case '1':
        adsData = require('../assets/company/Apple.json');
        break;
      case '2':
        adsData = require('../assets/company/Google.json');
        break;
      case '3':
        adsData = require('../assets/company/Microsoft.json');
        break;
      case '4':
        adsData = require('../assets/company/Sony.json');
        break;
      case '5':
        adsData = require('../assets/company/Amazon.json');
        break;
      default:
        adsData = require('../assets/company/Apple.json');
        break;
    }
    this.setState({
      work:adsData.work,
      name:adsData.name,
      rate:adsData.rate,
      id:adsData.id,
      picture:adsData.picture,
      })

  }
    render(){
     let pic = {
     uri: this.state.picture
   };
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Adverts</Text>
        <Text style={styles.name}>{this.state.name} 
        </Text>
        <FlatList style={styles.list}
          data={this.state.work}
          renderItem={({item})=><Text>{item.title},{item.MagazineIssue}
          {item.picture}</Text>}
          keyExtractor={(item,index)=>item.MagazineIssue}
        />
        <Image source = {pic} style={styles.picture}/>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{marginTop:30,backgroundColor: '#ecf0f1'},
  name:{fontSize:20, paddingBottom:10},
  picture:{width:300,height:300, flex: 1},
  list:{paddingTop:10},
 // publishdate:{fontSize:30,paddingTop:10},
  title:{fontSize:30, paddingTop:0}
});

