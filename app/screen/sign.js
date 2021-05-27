import React, {Component} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
  Image,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';

function Sign(props) {

  
    return (
      <KeyboardAvoidingView
        style={{
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
        <ScrollView style={{flex: 1, width: '100%' ,marginTop:50}} >
          <View style={{alignItems: 'center', width: '100%'}}>
            <Image source={require('../images/logo.png')}></Image>
            <View
              style={[
                Styles.input,
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop:40
                  // height:45
                },
              ]}>
              <MaterialCommunityIcons name="lock" size={25} color="#DB9A11" />
              <TextInput
                style={{
                  paddingHorizontal: 15,
                }}
                placeholder="Name"
                placeholderTextColor="white"
              />
            </View>
            <View
              style={[
                Styles.input,
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  // height:45
                },
              ]}>
              <MaterialCommunityIcons  name="lock" size={25} color="#DB9A11" />
              <TextInput
                style={{
                  paddingHorizontal: 15,
                }}
                keyboardType="email-address"
                placeholder="UserName"
                placeholderTextColor="white"
              />
            </View>
            <View
              style={[
                Styles.input,
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  // height:45
                },
              ]}>
              <MaterialCommunityIcons name="lock" size={25} color="#DB9A11" />
              <TextInput
                style={{
                  paddingHorizontal: 15,
                }}
                keyboardType="visible-password"
                placeholder="*******"
                placeholderTextColor="white"
              />
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}
              style={{alignItems: 'center', top: 20}}>
              <View style={Styles.btn}>
                <Text style={Styles.txt}> Sign Up </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{margin: 50}}
              onPress={() => props.navigation.navigate('Login')}>
              <View
                style={{
                  padding: 20,
                  alignContent: 'center',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{fontSize: 15, color: 'white', alignItems: 'center'}}>
                  {' '}
                  I Have Account !
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }


const Styles = StyleSheet.create({
  input: {
    margin: 10,
    backgroundColor: 'grey',
    opacity: 0.7,
    paddingHorizontal: 10,

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

export default Sign;
