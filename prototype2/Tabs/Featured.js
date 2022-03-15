import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
export default class SecondPage extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        //drawerLabel:'Page 1'
    };


    
  constructor(props) {
    super(props);
    this.state = {
      titleText: "IT in the Valley",
      headingText: 'Featured',
      articletitleText: 'Iphone 11 Review',
      articleText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Volutpat sed cras ornare arcu dui vivamus arcu. Et netus et malesuada fames. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Sollicitudin aliquam ultrices sagittis orci a. Magna sit amet purus gravida quis blandit. Sed risus pretium quam vulputate dignissim suspendisse in est. Elit at imperdiet dui accumsan sit amet nulla. Nec feugiat nisl pretium fusce id. Erat nam at lectus urna duis convallis convallis. Est ultricies integer quis auctor elit sed vulputate mi sit. Aenean et tortor at risus viverra adipiscing at. Nunc lobortis mattis aliquam faucibus purus in. Porta lorem mollis aliquam ut porttitor. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. At erat pellentesque adipiscing commodo elit at imperdiet. Aliquam sem fringilla ut morbi. In arcu cursus euismod quis viverra nibh cras. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. \n \n Elementum nisi quis eleifend quam. Aliquet nibh praesent tristique magna sit amet purus. Pharetra sit amet aliquam id diam maecenas. Viverra justo nec ultrices dui. Fames ac turpis egestas sed tempus urna et pharetra. Velit aliquet sagittis id consectetur. Nec feugiat nisl pretium fusce id velit. Tortor aliquam nulla facilisi cras fermentum odio. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Nam aliquam sem et tortor consequat id."
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={this.onPressTitle}>
          {this.state.titleText}{'\n'}
        </Text>
        <Text>
          {this.state.headingText} {'\n'}
        </Text>
        <Image 
      style={{width: 300, height: 300}}
      source={{uri: 'https://img.gadgethacks.com/img/60/13/63704397256633/0/rotate-photos-without-any-cropping-iphone-11-11-pro-11-pro-max-when-editing.1280x600.jpg'}}/>
      </Text>
      <Text style={styles.articletitleText}>
          {this.state.articletitleText} {'\n'}
        </Text>
      <Text>
          {this.state.articleText} {'\n'}
        </Text>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingTop: 10
    
  },
    baseText: {
    fontSize: 30,
    paddingTop: 0

  },
  articletitleText: {
    fontSize:20
  }
  
  
  //backgroundColor: 'white',
});
    
    