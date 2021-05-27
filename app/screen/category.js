import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList,Image,Dimensions} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Category({route,navigation}) {
  const [data, setData] = useState([]);
  const [Designarr, setDesignarr] = useState([
    {id:0,name: 'Engineering Consultancy'},
    {id:1,name: 'Engineering Design'},
    {id:2,name: 'Engineering Consultancy'},
    {id:3,name: 'Engineering Design'},
    {id:4,name: 'Engineering Consultancy'},
    {id:5,name: 'Engineering Design'},
    {id:6,name: 'Engineering Consultancy'},
    {id:7,name: 'Engineering Design'},
    {id:8,name: 'Engineering Consultancy'},
    {id:9,name: 'Engineering Design'},
  ]);
  useEffect(() => {
    if (route.params.cate == 'Designarr') {
      setData(Designarr);
    }
   
  }, []);

const select=(value)=>{
   if(value==1){
    navigation.navigate('Design',{subcate:'subDesign'})
   }
}
  return (
    <View style={Styles.container}>
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
          name="arrow-left"
          size={30}
          style={{padding: 10, color: 'white'}}
          onPress={() => navigation.replace('drawerStack')} 
        />
        <Image
          source={require('../images/logo.png')}
          style={{width: 100, height: 50}}
        />
      </View>
       
        <FlatList style={Styles.flat}
          data={data}
          keyExtractor={(item) => item.id}

          renderItem={({item}) => (
              <View>
            <TouchableOpacity style={Styles.cat} onPress={()=>select(item.id)}>
              <Text style={Styles.txtcat}>{item.name}</Text>
            </TouchableOpacity>
            
               
                        </View>
          )}
        />
      
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor:'black'
  },
  background: {
    opacity: 0.5,
    width: '100%',
    height: '100%',
    position: 'absolute',
    minHeight: Dimensions.get('screen').height,
  },
  cat: {
    backgroundColor: '#DB9A11',
    paddingVertical: 5,
    margin: 15,
    borderRadius: 20,
    borderWidth: 1,
    height:100,
    justifyContent:'center'
  },
  txtcat: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 5,
  },
  flat:{
      margin:15
  }
});
