import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MyProduct(){
    return(
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
        <View style={[Styles.label,{flexDirection:'row',alignItems:'center',   borderBottomColor: '#DB9A11',
      borderBottomWidth: 3,}]} >
        <MaterialCommunityIcons
            name="format-list-bulleted-square"
            size={25}
            style={{padding: 10, color: 'black'}}
            onPress={() => navigation.replace('drawerStack')}
          />
          <Text style={Styles.txtlabel}>My Products </Text>
        </View>
  
        
          <View style={Styles.item}>
           <View style={{flexDirection:'row',justifyContent:'center',
           marginVertical:15,
           alignItems:'flex-start',alignContent:'flex-start'}}>
            <Text style={{color:'#DB9A11', fontWeight:'bold',fontSize:18,paddingHorizontal:5}}>
                task id:
            </Text>
            <Text style={{color:'black', fontWeight:'bold',fontSize:18,paddingHorizontal:5}}>
            10145
            </Text>
           </View>
           <View style={{alignItems:'flex-start',paddingVertical:10}}>
            <Text style={{color:'#DB9A11', fontWeight:'bold',fontSize:18,paddingHorizontal:5,
        
        }}>
            Name of the service:
            </Text>
            <Text style={{color:'black', fontWeight:'bold',fontSize:18,paddingHorizontal:5}}>
            2- Designing architectural sketches (rural / villa / housing) up to 1000 
            </Text>
           </View>
           <View style={{flexDirection:'row',justifyContent:'center',
           marginVertical:15,paddingVertical:10,
           alignItems:'flex-start',alignContent:'flex-start'}}>
            <Text style={{color:'#DB9A11', fontWeight:'bold',fontSize:18,paddingHorizontal:5}}>
            Status :
            </Text>
            <Text style={{color:'black', fontWeight:'bold',fontSize:18,paddingHorizontal:5}}>
            Finished
            </Text>
           </View>
           <View
          style={{paddingVertical:10,
            flexDirection: 'row',
            alignItems: 'center',
            alignContent: 'space-around',
            justifyContent: 'space-around',
            alignSelf:'center',
            margin:5
            
            
          }}>
           <TouchableOpacity>
               <View style={{backgroundColor:'#DB9A11',width:120,
               borderRadius:20,padding:5,marginHorizontal:20}}>
                   <Text style={{color:'white',fontWeight:'bold',alignSelf:'center',fontSize:15}}>
                   Show
                   </Text></View>
           </TouchableOpacity>
            <TouchableOpacity>
                <View  style={{backgroundColor:'#DB9A11',borderRadius:20,padding:5,width:120,}}>
                    <Text style={{color:'white',fontWeight:'bold',alignSelf:'center',fontSize:15}}>
                    Conversation
                    </Text>
                </View>
            </TouchableOpacity>
           </View>
          </View>
 
      
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
      fontSize: 20,
      color: 'black',
   
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
      padding:5,
      height: 300,
      borderRadius: 20,
      borderWidth: 1,
      alignItems: 'flex-start',
      borderColor: '#DB9A11',
      alignSelf: 'center',
      margin: 15,
      marginTop:20,
      
      
    },
  });