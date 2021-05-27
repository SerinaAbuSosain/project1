import React ,{useState} from 'react';
import { View ,Text, TouchableOpacity,StyleSheet,Dimensions,Image} from 'react-native';
import {Avatar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native-gesture-handler';


export default function FirstDrawer(props){
    const select=(value)=>{
        if(value==0){
         props.navigation.navigate('We')
        }else if(value==1){
            props.navigation.navigate('Call')
           }
     }
    const [Display1,setDisplay1]=useState(true);
    const [Display2,setDisplay2]=useState(true);
const [Mainarr,setMainarr]=useState([
    {id:0,name:'How are we?'},
    {id:1,name:'Call us'}
]);

const [Designarr,setDesignarr]=useState([
    {name:'Engineering Consultancy'},
    {name:' Engineering Design'}
]);
    return(
<View style={{width:'100%', height:'100%',backgroundColor:'black',flex:1}} >
<Image
        source={require('../images/background.jpg')}
        resizeMode="cover"
        style={Styles.background}
      />
    <View style={{width:'100%',padding:20}}>
        <Avatar.Image source={require("../images/personicon.png")} style={{alignSelf:'center', margin:20}}/>
        <Text style={{color:'#DB9A11' ,fontWeight:'bold',fontSize:20,alignSelf:'center'}}>
  Name
</Text>
<Text style={{color:'#DB9A11' ,fontWeight:'bold',
fontSize:20,alignSelf:'center',padding:10,}}>
    test@test.com
</Text>
    </View>
    
    <View style={{width:'100%' ,height:'100%',}}> 
<TouchableOpacity style={Styles.row} onPress={()=>setDisplay1(!Display1)}>
    <MaterialCommunityIcons name='home' color="white" size={25} />
    
    <View >
        <Text style={Styles.txt2}>The Main</Text>
    </View>
</TouchableOpacity>
<View style={[Styles.submenu,{display:Display1?'none':'flex'}]}>
<FlatList data={Mainarr}
  keyExtractor={(item) => item.id}
  
renderItem={({item}) =>
<TouchableOpacity onPress={()=>select(item.id)}>
<Text style={Styles.txtmenu}>
{item.name}
</Text>
</TouchableOpacity>
} />
    </View>
<View style={Styles.line}/>
<TouchableOpacity style={Styles.row} onPress={() => props.navigation.replace('Category',{cate:'Designarr'})}>
<MaterialIcons name='design-services' color="white" size={25} />
    <View >
        <Text style={Styles.txt2}>Design Online</Text>
    </View>
</TouchableOpacity>

<View style={Styles.line}/>
<TouchableOpacity style={Styles.row} onPress={()=>props.navigation.replace('Management')}>
<MaterialCommunityIcons name='clock-time-eight' color="white" size={25} />
    <View >
        <Text style={Styles.txt2}>Projects Management</Text>
    </View>
</TouchableOpacity>
<View style={Styles.line}/>
<TouchableOpacity style={Styles.row}>
<Octicons name='project' color="white" size={25} />
    <View >
        <Text style={Styles.txt2}>Projects</Text>
    </View>
</TouchableOpacity>
<View style={Styles.line}/>
<TouchableOpacity style={Styles.row} onPress={()=>props.navigation.navigate('MyProduct')}>
<Octicons name='project' color="white" size={25} />
    <View >
        <Text style={Styles.txt2}>My Products</Text>
    </View>
</TouchableOpacity>
<View style={Styles.line}/>
<TouchableOpacity style={Styles.row}>
<MaterialIcons name='logout' color="white" size={25} />
    <View >
        <Text style={Styles.txt2}>Logout</Text>
    </View>
</TouchableOpacity>
    </View>
    
</View>
    );

}
const Styles =StyleSheet.create({
    txt2:{
        color:'white',
        fontWeight:'bold',
        fontSize:17,
        padding:20,
    },
    line:{
        borderBottomWidth:0.8,
        borderBottomColor:'#DB9A11',
        width:'100%'
    },
    row:{flexDirection:'row',alignItems:'center',paddingHorizontal:20},
    submenu:{
        alignSelf:'center',
        alignItems:'center',
       
     
       // position:'absolute',
        width:'90%',
        
        alignSelf:'flex-end',
       // margin:10,
        

       

    },
    txtmenu:{
        color:"#DB9A11",
        fontSize:15,
        padding:8,
        borderBottomWidth:0.5,
       borderBottomColor:'white',
        fontWeight:'bold'
       
    },
    background: {
        opacity: 0.5,
        width: '100%',
        height: '100%',
        position: 'absolute',
        minHeight: Dimensions.get('screen').height,
      },
});