import React from 'react';
import {View, Text, StyleSheet, Image,KeyboardAvoidingView,TextInput,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Call({navigation, navigation: {goBack}}) {
  return (
      <KeyboardAvoidingView style={{width: '100%', height: '100%', flex: 1}}>
    <View style={{width: '100%', height: '100%', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          alignContent: 'space-between',
          justifyContent: 'space-between',
        }}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={30}
          style={{padding: 10, color: 'black'}}
          onPress={() => navigation.replace('drawerStack')}
        />
        <Image
          source={require('../images/logo.png')}
          style={{width: 100, height: 50}}
        />
      </View><ScrollView>
      <View style={Styles.label}>
        <Text style={Styles.txtlabel}>Contact Us</Text>
      </View>
      
<View style={Styles.head}>
 
       <MaterialCommunityIcons name='home' size={30}/>
       <Text style={Styles.txthead}>

           Address :
    </Text>
 
</View>
<Text style={Styles.txtbody}>
        Location
        </Text>
             
<View style={Styles.head}>
 
 <MaterialCommunityIcons name='phone' size={30}/>
 <Text style={Styles.txthead}>

     Phone :
</Text>

</View>
<Text style={Styles.txtbody}>
0798768768
  </Text>
  <View style={Styles.head}>
 
 <MaterialCommunityIcons name='email' size={30}/>
 <Text style={Styles.txthead}>

     Email :
</Text>

</View>
<Text style={Styles.txtbody}>
Info@OperationOnline.com
  </Text>
  
  <View style={[Styles.label,{marginTop:40}]}>
        <Text style={Styles.txtlabel}> Contact Form</Text>
      </View>
      <View style={Styles.input}>
          <TextInput  placeholder='Name' placeholderTextColor='grey' />
      </View>
      <View style={Styles.input}>
          <TextInput  placeholder='Email' placeholderTextColor='grey' keyboardType='email-address' />
      </View>
      <View style={Styles.input}>
          <TextInput  placeholder='Subject' placeholderTextColor='grey' />
      </View>
      <View style={Styles.input}>
          <TextInput  placeholder='Message' placeholderTextColor='grey' numberOfLines={4} multiline />
      </View>
      <TouchableOpacity
            onPress={() => props.navigation.replace('drawerStack')}
            style={{alignItems: 'center'}}>
            <View style={Styles.btn}>
              <Text style={Styles.txt}> Send </Text>
            </View>
          </TouchableOpacity>
      </ScrollView>
    </View></KeyboardAvoidingView>
  );
}

const Styles = StyleSheet.create({
  label: {
    marginHorizontal: 20,
    marginVertical: 10,
    width: 300,
  },
  txtlabel: {
    fontSize: 25,
    color: 'black',
    borderBottomColor: '#DB9A11',
    borderBottomWidth: 3,
    padding: 10,
    fontWeight: 'bold',
  },
  line: {
    borderBottomWidth: 0.8,
    borderBottomColor: '#DB9A11',
    width: '100%',
  },
  head: {
    padding: 15,
   flexDirection:"row",

  },
  txthead:{
      fontSize:20,
      fontWeight:'bold',
      paddingHorizontal:10
  },
  txtbody:{
      color:'grey',
      fontSize:15,
      paddingHorizontal:60,
      fontWeight:'bold'

  },
  input:{
      paddingHorizontal:10,
      borderColor:'grey',
      borderRadius:20,
      borderWidth:1,
      margin:10,
      marginHorizontal:40
  },
  btn: {
    borderRadius: 20,
    width: 150,
    paddingHorizontal: 10,
    paddingVertical: 10,
    margin: 20,
    backgroundColor: '#DB9A11',
    marginBottom:50
  },
  txt: {
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 20,
    textAlign: 'center',
  },
});
