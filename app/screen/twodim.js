import React,{useState} from 'react';
import { View ,FlatList,Image,StyleSheet,Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function TwoDimensional({navigation, navigation:{goBack}}){
const [Product,setProduct]=useState([
    {
        id:0,name:'product1',price:'44',image:'../images/product.png',
    },
    {
        id:1,name:'product2',price:'90',image:'../images/product.png',
    },
    {
        id:2,name:'product1',price:'44',image:'../images/product.png',
    },
    {
        id:3,name:'product2',price:'90',image:'../images/product.png',
    },
    {
        id:4,name:'product1',price:'44',image:'../images/product.png',
    },
    {
        id:5,name:'product2',price:'90',image:'../images/product.png',
    },
]);
    return(
        <View style={{width:'100%',height:'100%',flex:1,}}>
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
          onPress={() => goBack()} 
        />
        <Image
          source={require('../images/logo.png')}
          style={{width: 100, height: 50}}
        />
      </View>
       <View style={Styles.label}>
         <Text style={Styles.txtlabel}>
         Two-Dimensional Design
         </Text>
       </View>
            <FlatList
  data={Product}
  renderItem={({ item }) => (
    <View
      style={
      Styles.flat  
      }><View
      style={Styles.flatitem}>
      <Image
        style={{resizeMode:'cover',width:150,height:150,marginTop:5, borderRadius:20}}
        source={require('../images/product.png')}
      />
      <Text style={Styles.txt}>{item.name}</Text>
      <Text style={Styles.txt}>{item.price}</Text>
      </View>
    </View>
  )}
  
  numColumns={2}
  keyExtractor={(item, index) => index.toString()}
/>
        </View>
    );

}
const Styles=StyleSheet.create({
txt:{
    fontWeight:'bold',
    fontSize:17,
    color:'#000',
    
},
flat:{
    flex: 1,
        flexDirection: 'column',
        alignItems:'center',
        marginTop:30,padding:7
},
flatitem:{
    width:170,height:200,borderRadius:20,
    backgroundColor:'silver',alignItems:'center',
    elevation:20, shadowColor:'black',shadowRadius:1 ,
   shadowOffset:{width:30,height:-30},shadowOpacity:1 ,

},
label:{
  marginHorizontal:20,marginVertical:10,
  width:300

},
txtlabel:{
  fontSize:20,
  color:'black',
  borderBottomColor:'#DB9A11',
  borderBottomWidth:2,padding:10,fontWeight:'bold'
}

});