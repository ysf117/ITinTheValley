import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList, 
  ActivityIndicator
} from 'react-native';
    

export default class Tab2Page1 extends React.Component {
static navigationOptions = {
        title: 'Payments',
      };
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }


  componentWillMount () {
       const localPaymentData = require('../assets/Payments.json');
      
       this.setState({
          isLoading: false,
          dataSource: localPaymentData.payments,
        }, function () {

        });
  }



  _renderItem = (info) => {
    
    return <Text>{this.state.dataSource.map((payment, index) => (
        <p> Paid, {payment.name} {payment.payment}! </p>
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


