import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Management({navigation}) {
  return (
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
      </View>
      <View style={Styles.label}>
        <Text style={Styles.txtlabel}>Projects Management</Text>
      </View>

      <TouchableOpacity onPress={()=>navigation.navigate('TimeLine') }>
        <View style={Styles.item}>
          <Image
            source={require('../images/timeline.png')}
            resizeMode="cover"
            style={{width: '100%', borderRadius: 20, height: '100%',position:'absolute'}}
          />
          
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Boq') }>
        <View style={Styles.item}>
          <Image
            source={require('../images/boq.png')}
            resizeMode="cover"
            style={{width: '100%', borderRadius: 20, height: '100%',position:'absolute'}}
          />
          
        </View>
      </TouchableOpacity>
    </View>
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
  item: {
    width: 330,
    height: 180,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#DB9A11',
    alignSelf: 'center',
    margin: 15,
    marginTop:20,
    elevation:24
  },
});
