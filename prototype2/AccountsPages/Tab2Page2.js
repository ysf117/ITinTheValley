import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList, 
  ActivityIndicator
} from 'react-native';

export default class Tab2Page2 extends React.Component {
static navigationOptions = {
        title: 'Reciepts',
      };

    constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }


  componentWillMount () {
       const localReceiptData = require('../assets/Receipts.json');
      
       this.setState({
          isLoading: false,
          dataSource: localReceiptData.receipts,
        }, function () {

        });
  }



  _renderItem = (info) => {
    
    return <Text>{this.state.dataSource.map((reciept, index) => (
        <p>The payment from {reciept.advertisers} of {reciept.amount} is {reciept.status}.</p>
    ))}</Text>
  }



  render() {


    return (
      <View style={{ flex: 1, paddingTop: 20, backgroundColor: '#ecf0f1' }}>
        <FlatList
          data={this.state.dataSource}
          
          renderItem={this._renderItem}
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }
}
