import React from 'react';
import { View,Image, StyleSheet,Dimensions,Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Boq({navigation}){
    return(
        <View style={{backgroundColor: 'grey', flex: 1, width: '100%',alignSelf:'center',
        height: '100%',}}>
        <Image
          source={require('../images/boq.png')}
          resizeMode="cover"
          style={Styles.background}
        />
        <View>
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
          onPress={() => navigation.replace('Management')}
        />
        <Image
          source={require('../images/logo.png')}
          style={{width: 100, height: 50}}
        />
      </View>
      <ScrollView>
      <View>
      <View style={Styles.label}>
        <Text style={Styles.txtlabel}>Projects Details</Text>
      </View>
      <Text style={Styles.txt}>
      Calculate the quantities of the proposed project
      </Text>
      <View style={[Styles.label,{width:200}]}>
        <Text style={[Styles.txtlabel,{fontSize:20,margin:10}]}>The Description</Text>
      </View>
      <Text style={Styles.subtxt}>
      Calculate quantities
      </Text>
      <Text style={[Styles.subtxt ,{fontWeight:'100',marginLeft:60,marginVertical:15,marginBottom:25}]}>
      Please send the nature of the project to an email online@ab-jo.com

The project will be studied and costs will be sent to it.
      </Text>
      <Text style={Styles.subtxt}>
      Provide calculation of quantities for projects
      </Text>
      <Text style={[Styles.subtxt ,{fontWeight:'100',marginLeft:60,
      marginVertical:15,marginBottom:25}]}>
      Submitting quantities accounts for the project from the beginning of 
      the design until the completion of the work of bone and finishes.
      </Text>
      <Text style={Styles.subtxt}>
      Required from the client: -
      </Text>
      <Text style={[Styles.subtxt ,{fontWeight:'100',marginLeft:60,
      marginVertical:15}]}>
     * Submit all project plans in any available format from paper or electronic engineering programs.
      </Text>
      <Text style={[Styles.subtxt ,{fontWeight:'100',marginLeft:60,
      marginVertical:15,marginBottom:25}]}>
* Please attach any other requirements, if any.
      </Text>
      <Text style={[Styles.subtxt ,{fontWeight:'100',marginLeft:60,
      marginVertical:15,paddingBottom:100}]}>
* Please send all attachments to an email online@ab-jo.com
      </Text>
        </View>
        </ScrollView></View>
        </View>
    );
}

const Styles=StyleSheet.create({
    background: {
        opacity: 0.5,
        width: '100%',
        height: '100%',
        position: 'absolute',
        minHeight: Dimensions.get('screen').height,
        alignSelf:'center'
      },
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
      txt:{
          fontSize:18,
          paddingHorizontal:25,
          margin:10

      },
      subtxt:{color:'black',fontSize:18,fontWeight:'bold',marginHorizontal:50}
});