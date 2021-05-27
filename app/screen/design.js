import React,{useState,useEffect} from 'react';
import { View,Text,StyleSheet,FlatList,Image,Dimensions,TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Design({route, navigation:{goBack},navigation}){
    const [data, setData] = useState([]);
    const [subDesignarr, setsubDesignarr] = useState([
        {id:0,name: ' Two-Dimensional Design'},
        {id:1,name: 'Three-Dimensional Design'},
        {id:2,name: 'Structural Design'},
        {id:3,name: ' Example1'},
        {id:4,name: 'Example2'},
        {id:5,name: 'Example 3 '},
        
      ]);
      useEffect(() => {
        if (route.params.subcate == 'subDesign') {
          setData(subDesignarr);
        }
       
      }, []);
    
      const select=(value)=>{
        if(value==0){
         navigation.navigate('TwoDimensional')
        }
     }

return(
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
     onPress={() => goBack()} 
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
