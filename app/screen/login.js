import React, {Component} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  StyleSheet,
  Text,
  Button,
  Dimensions,

  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,

  View,
  Image,
} from 'react-native';
import {color} from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import Home from './home';

 function Login(props) {
 
  
    return (
        <KeyboardAvoidingView   style={{
            alignItems: 'center',
            backgroundColor: 'black',
            width: '100%',
            height: '100%',
            
          }}>
           <Image
          source={require('../images/background.jpg')}
          resizeMode="cover"
          style={{
            opacity: 0.5,
            width: '100%',
            height: '100%',
            position: 'absolute',
            minHeight: Dimensions.get('screen').height,
          }}
        />
<ScrollView style={{top:30}}>
        <View style={{}}>
          <Image source={require('../images/logo.png')}  ></Image>

          <View
            style={[
              Styles.input,
              {flexDirection: 'row', alignItems: 'center',
           // height:45
            },
            ]}>
            <MaterialCommunityIcons name="email" size={25} color="#DB9A11" />

            <TextInput
              style={{
                
                paddingHorizontal: 15,
 
              }}
              keyboardType="email-address"
              placeholder="UserName"
              placeholderTextColor="white"
            />
          </View>
          <View   style={[
              Styles.input,
              {flexDirection: 'row', alignItems: 'center',
           // height:45
            },
            ]}>
          <MaterialCommunityIcons name="lock" size={25} color="#DB9A11" />
          <TextInput
          style={{ paddingHorizontal: 15,}}  
            keyboardType="visible-password"
            placeholder="*******"
            placeholderTextColor="white"
          />
          </View>
          <TouchableOpacity
            onPress={() =>props.navigation.navigate('Home')}
            style={{alignItems: 'center'}}>
            <View style={Styles.btn}>
              <Text style={Styles.txt}> Login </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{padding: 20, alignContent: 'center', alignSelf: 'center'}}>
            <Text style={{fontSize: 15, color: 'white', alignItems: 'center'}}>
              Forgot Password?
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Sign')}>
            <View
              style={{
                padding: 20,
                alignContent: 'center',
                alignSelf: 'center',
              }}>
              <Text
                style={{fontSize: 15, color: 'white', alignItems: 'center'}}>
                
                New Here? Sign Up
              </Text>
            </View>
          </TouchableOpacity>
        </View></ScrollView>
     </KeyboardAvoidingView>
    );
  }


const Styles = StyleSheet.create({
  input: {
    margin: 10,
    backgroundColor: 'grey',
    opacity: 0.7,
    // padding: 15,
    paddingHorizontal:10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 20,
    width: 300,
    fontWeight: 'bold',
  },
  btn: {
    borderRadius: 20,
    width: 200,
    paddingHorizontal: 50,
    paddingVertical: 10,
    margin: 20,
    backgroundColor: '#DB9A11',
  },
  txt: {
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Login;
