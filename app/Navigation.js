import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screen/login';
import Home from './screen/home';
import Category from './screen/category';
import {StyleSheet, Text, View} from 'react-native';
import Sign from './screen/sign';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FirstDrawer from './screen/Drawer';
import Design from './screen/design';
import TwoDimensional from './screen/twodim';
import We from './screen/we';
import Call from './screen/call';
import Management from './screen/Management';
import TimeLine from './screen/timeline';
import Boq from './screen/boq';
import MyProduct from './screen/myproducts'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const drawerStack = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={props =>
      <FirstDrawer {...props} />
    }
    drawerPosition="left">
    <Drawer.Screen name="Home" component={Home} />
  </Drawer.Navigator>
);

function NavigationScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="drawerStack" component={drawerStack} />
        <Stack.Screen name="FirstDrawer" component={FirstDrawer}  />
        <Stack.Screen name="Sign" component={Sign} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Design" component={Design} />
        <Stack.Screen name="TwoDimensional" component={TwoDimensional} />
        <Stack.Screen name="We" component={We} />
        <Stack.Screen name="Call" component={Call} />
        <Stack.Screen name='Management' component={Management}/>
        <Stack.Screen name='TimeLine' component={TimeLine}/>
        <Stack.Screen name='Boq' component={Boq}/>
        <Stack.Screen name='MyProduct' component={MyProduct}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default NavigationScreen;
