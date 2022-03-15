import React, {Component}from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';

export default class Advertisers extends Component{

  constructor(props){
    super(props) 
    this.state = {}
  }

  componentWillMount(){
    var advertListData;
    advertListData = require('../assets/company/marketing.json');
    this.setState({
      adverts:advertListData.adverts,
      size: advertListData.size,
      magazineIssue: advertListData.MagazineIssue
      })

  }


  render(){
    return (
      <View style={{backgroundColor: '#ecf0f1', marginTop:30, marginLeft:20 }}>
        <Text style={styles.title}>List of Advertisers</Text>
        <FlatList style={styles.list}
          data={this.state.adverts}
          renderItem={({item})=><Text> {item.advertisers}, Ad size: {item.size}, Issue: {item.MagazineIssue}</Text>}
        />
      </View>
    );
    
  }


}


const styles = StyleSheet.create({
  title:{fontSize:30},
  list:{paddingTop:20},

});



