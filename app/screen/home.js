import * as React from 'react';
import {Image, View, StyleSheet, Text, Dimensions,} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';




     


 export default function Home({ navigation }) {
 

  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <Image
        source={require('../images/background2.jpg')}
        resizeMode="cover"
        style={Styles.background}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          alignContent: 'space-between',
          justifyContent: 'space-between',
        }}>
        <MaterialCommunityIcons
          name="menu"
          size={30}
          style={{padding: 10, color: '#DB9A11'}}
          onPress={() => navigation.openDrawer()}  
        />
        <Image
          source={require('../images/logo.png')}
          style={{width: 100, height: 50}}
        />
      </View>
      <ScrollView
        horizontal
        style={{
          alignSelf: 'center',
          marginTop: 50,
          alignContent: 'space-between',
        }}><TouchableOpacity style={Styles.touch}>
        <View style={{marginLeft: 20, width: 250}}>
          <Text style={Styles.txt}>Project Management</Text>
          <View style={Styles.line} />

          <Image source={require('../images/pm.jpg')} style={Styles.img} />
          <Text style={Styles.txt2}>
            Engineering projects management is an integrated scientific system,
            as it includes many different processes and stages represented
          </Text>
        </View></TouchableOpacity>
        <TouchableOpacity style={Styles.touch} onPress={()=>navigation.navigate('Category' , {cate:'Designarr'})}>
        <View style={{marginLeft: 20, width: 250}} >
          <Text style={Styles.txt}>Design Online</Text>
          <View style={Styles.line} />
          <Image source={require('../images/design.jpg')} style={Styles.img} />
          <Text style={Styles.txt2}>
            Engineering projects management is an integrated scientific system,
            as it includes many different processes and stages represented
          </Text>
        </View></TouchableOpacity>
        <TouchableOpacity style={Styles.touch}>
        <View style={{marginLeft: 20, width: 250}}>
          <Text style={Styles.txt}>Our Projects</Text>
          <View style={Styles.line} />
          <Image source={require('../images/eng.jpg')} style={Styles.img} />
          <Text style={Styles.txt2}>
            Engineering projects management is an integrated scientific system,
            as it includes many different processes and stages represented
          </Text>
        </View></TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const Styles = StyleSheet.create({
  txt: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  txt2: {
    fontSize: 18,
    top: 190,
    color: 'white',
    padding: 30,
    opacity: 0.6,
    fontWeight: 'bold',
  },
  img: {
    borderRadius: 20,
    width: 250,
    height: 400,
    opacity: 0.5,
    position: 'absolute',
    top: 70,
    borderWidth: 3,
    borderColor: '#DB9A11',
  },
  background: {
    opacity: 0.5,
    width: '100%',
    height: '100%',
    position: 'absolute',
    minHeight: Dimensions.get('screen').height,
  },
  line: {
    backgroundColor: '#DB9A11',
    width: 120,
    height: 4,
  },
  touch:
  {height:'90%'}
});
