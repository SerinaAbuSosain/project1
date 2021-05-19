/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
 
  StyleSheet,
  Text,
  
  View,
} from 'react-native';


class App extends Component{
  render(){
    return(
      <View style={{
        alignSelf:'center',
      justifyContent:"center",
      flex:1}}>
        <Text style={styles.style1}>
          Hello World
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  style1:{
    fontSize:30,
   
    

  }
});

export default App;
