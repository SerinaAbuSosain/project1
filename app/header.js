import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screen/login';
import Home from './screen/home';
import {StyleSheet, Text, View} from 'react-native';
import Sign from './screen/sign';

const Stack = createStackNavigator();
class Header extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false, }}>
          <Stack.Screen name="Sign" component={Sign}  />
          <Stack.Screen name="Login" component={Login}  />
          <Stack.Screen name="Home" component={Home}  />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({});

export default Header;
