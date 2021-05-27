import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function We({navigation, navigation: {goBack}}) {
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
        <Text style={Styles.txtlabel}>Who are we</Text>
      </View>
      

      <Text style={Styles.script}>
        Movie producers and inbound marketers aren't that different when it
        comes to creating and editing video content. We're both telling a story,
        and whether that story is about a protagonist or a product, we're both
        trying to captive our audiences and make them believe in the story we
        tell. What happens at the end of the story is a little different,
        though. Most marketers wear a lot of hats and let's just say,
         out of all
        the hats worn, the videographer one isn't always their favorite. That's
        because creating videos can be intimidating, especially if you're new to
        it.
      </Text>
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
  script: {
    padding: 30,
    fontSize: 16,
    color: 'grey',
    //fontWeight: 'bold',
  },
});
