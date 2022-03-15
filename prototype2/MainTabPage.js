/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabNavigator, StackNavigator, BottomTabBar } from 'react-navigation';




import Tab2Page1 from './AccountsPages/Tab2Page1'
import Tab2Page2 from './AccountsPages/Tab2Page2'



import Tab3Page1 from './ArchivePages/Tab3Page1'
import Tab3Page2 from './ArchivePages/Tab3Page2'
import Tab3Page3 from './ArchivePages/Tab3Page3'
import Tab3Page4 from './ArchivePages/Tab3Page4'


import Tab4Page1 from './MarketingPages/Tab4Page1'
import Tab4Page2 from './MarketingPages/Tab4Page2'


import LoginPage from './Tabs/LoginPage';
import Featured from './Tabs/Featured'
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';
import Tab4 from './Tabs/Tab4';
//import Cameras from './Tabs/Cameras'

const Tabs = TabNavigator({
    'Login/Logout': { screen: LoginPage },
    Featured: { screen: Featured },
    Accounts: { screen: Tab2 },
    Archive: { screen: Tab3 },
    Marketing: { screen: Tab4  },
   // Camera: { screen: Cameras}
  
  },
  {
    tabBarPosition:'bottom',
    tabBarOptions: {
      tabBarPosition:'bottom',
      activeTintColor: '#ffffff',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: '#353539',
      activeBackgroundColor: '#353539',
      showIcon: false,
      scrollEnabled:true,
      indicatorStyle: {
        borderBottomColor: 'red',
        borderBottomWidth: 2,
      },
      labelStyle:{
        fontSize: 9,
        justifyContent: 'bottom',
        alignItems: 'bottom',
       },
      style:{
        backgroundColor: '#353539',
      },
      tabStyle: {
        width:70,
      }
    },
  }
  
  
  );


  const TabPages = StackNavigator({
    Tab:{ screen:Tabs,
        navigationOptions:()=>({
            header:null
        }),},

    Tab2Page1: { screen: Tab2Page1 },
    Tab2Page2: { screen: Tab2Page2 },
    


    Tab3Page1: { screen: Tab3Page1 },
    Tab3Page2: { screen: Tab3Page2 },
    Tab3Page3: { screen: Tab3Page3 },
    Tab3Page4: { screen: Tab3Page4 },


    Tab4Page1: { screen: Tab4Page1 },
    Tab4Page2: { screen: Tab4Page2 },
  


  
  },
);

export default TabPages;
