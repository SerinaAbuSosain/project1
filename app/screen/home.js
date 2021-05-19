import {HeaderTitle} from '@react-navigation/stack';
import {Picker} from '@react-native-picker';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {color} from 'react-native-reanimated';

export default function Home() {
  const [dis, isdis] = useState('none');
  return (
    <View style={{flex: 1, width: '100%'}}>
      <View
        style={{
          alignItems: 'flex-end',
          backgroundColor: 'black',
          height: '8%',
          justifyContent: 'center',
          paddingHorizontal: 10,
        }}>
        <MaterialCommunityIcons
          name="menu"
          color="#DB9A11"
          size={30}
          onPress={() => isdis(dis == 'flex' ? 'none' : 'flex')}
        />
      </View>
      <View
        style={
          (Styles.box,
          {
            display: dis,
            paddingHorizontal: 70,
            backgroundColor: 'black',
            alignItems: 'flex-end',
          })
        }>
        <TouchableOpacity>
          <Text style={Styles.txt}>الرئيسية </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={Styles.txt}>التصميم عن بعد </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={Styles.txt}>إدارة المشاريع </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={Styles.txt}>المشاريع </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={Styles.txt}>التسجيل</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={Styles.txt}>تسجيل الدخول </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{flex: 1, width: '100%'}}>
        <View style={{width: Dimensions.get('screen').width, height: 250}}>
          <Image
            source={require('../images/1.png')}
            resizeMode="cover"
            style={{width: Dimensions.get('screen').width, height: 250,bottom:20}}
          />
        </View>
        <View
        
          style={{
            width: 280,
            borderWidth: 3,
            borderColor: 'white',
            alignSelf: 'flex-end',
            top: 40,
            right: 20,
          }}>
          <Image
            source={require('../images/pm.jpg')}
            resizeMode="cover"
            style={{height: 200, width: 280}}
          />
        </View>
        <View style={{}}></View>
        <Text
          style={{
            borderBottomColor: '#DB9A11',
            borderBottomWidth: 3,
            width: 150,
            fontSize: 25,
            margin: 30,
            top: 30,
            fontWeight: 'bold',
            alignSelf: 'flex-end',
            padding: 5,
          }}>
          إدارة المشاريع
        </Text>
        <View>
          <Text
            style={{
              paddingHorizontal: 15,
              fontSize: 18,
              margin: 15,
              color: 'grey',
            }}>
            تعتبر إدارة المشروعات الهندسية نظام علمي متكامل الأركان حيث أنه
            يتضمن العديد من العمليات و المراحل المتنوعة متمثلة
          </Text>
        </View>
        <View
          style={{
            width: 280,
            borderWidth: 3,
            borderColor: 'white',
            alignSelf: 'flex-end',
            top: 40,
            right: 20,
          }}>
          <Image
            source={require('../images/eng.jpg')}
            resizeMode="cover"
            style={{height: 200, width: 280}}
          />
        </View>
        <View style={{}}></View>
        <Text
          style={{
            borderBottomColor: '#DB9A11',
            borderBottomWidth: 3,
            width: 200,
            fontSize: 25,
            margin: 30,
            top: 30,
            fontWeight: 'bold',
            alignSelf: 'flex-end',
            padding: 5,
          }}>
          الإشراف الهندسي
        </Text>
        <View>
          <Text
            style={{
              paddingHorizontal: 15,
              fontSize: 18,
              margin: 15,
              color: 'grey',
            }}>
            مهام وواجبات جهاز الإشراف الهندسي على أعمال المشاريع في التالي :
            تحديد مسئوليات المهندسين المقاولين .
          </Text>
        </View>
        <View style={{padding: 30}}>
          <Text style={Styles.head}>مشاريعنا ...</Text>
          <Text style={Styles.head}>
            مجموعة مذهلة من التصاميم العصرية في كافة أنواع البناء ..
          </Text>
          <Text
            style={{
              top: 20,

              fontSize: 18,
              color: 'grey',
            }}>
            يسعى مكتب "العمارة والبناء - مهندسون مستشارون" لتقديم المعلومات
            والحلول الهندسية المُبتكرة من خلال الدراسات والتصاميم وإدارة
            المشاريع بأحدث وسائل التقنية والإدارة الحديثة وبمشاركة فريق عمل مؤهل
            لتحقيق معايير عالية في الجودة والسلامة والتنمية المستدامة ممّا يعزز
            الثقة والمصداقية لدى شركائنا في العمل.
          </Text>
          <View
            style={[
              {
                top: 30,
                alignSelf: 'flex-end',
                flexDirection: 'row',
                alignItems: 'center',

                // height:45
              },
            ]}>
            <Text
              style={{
                fontWeight: 'bold',
                right: 7,
                color: 'grey',
                fontSize: 19,
              }}>
              تكحيل حجر
            </Text>
            <MaterialCommunityIcons
              name="arrow-right-circle-outline"
              size={20}
              color="grey"
            />
          </View>
          <View
            style={[
              {
                top: 30,
                alignSelf: 'flex-end',
                flexDirection: 'row',
                alignItems: 'center',

                // height:45
              },
            ]}>
            <Text
              style={{
                fontWeight: 'bold',
                right: 7,
                color: 'grey',
                fontSize: 19,
              }}>
              اعمال الديكور
            </Text>
            <MaterialCommunityIcons
              name="arrow-right-circle-outline"
              size={20}
              color="grey"
            />
          </View>
          <View
            style={[
              {
                top: 30,
                alignSelf: 'flex-end',
                flexDirection: 'row',
                alignItems: 'center',

                // height:45
              },
            ]}>
            <Text
              style={{
                fontWeight: 'bold',
                right: 7,
                color: 'grey',
                fontSize: 19,
              }}>
              المواصفات الفنية لأعمال التشطيبات
            </Text>
            <MaterialCommunityIcons
              name="arrow-right-circle-outline"
              size={20}
              color="grey"
            />
          </View>
          <View
            style={[
              {
                top: 30,
                alignSelf: 'flex-end',
                flexDirection: 'row',
                alignItems: 'center',

                // height:45
              },
            ]}>
            <Text
              style={{
                fontWeight: 'bold',
                right: 7,
                color: 'grey',
                fontSize: 19,
              }}>
              متطلبات مشاريع الخرسانة جاهزة الخلط
            </Text>
            <MaterialCommunityIcons
              name="arrow-right-circle-outline"
              size={20}
              color="grey"
            />
          </View>
          <View
            style={[
              {
                top: 30,
                alignSelf: 'flex-end',
                flexDirection: 'row',
                alignItems: 'center',

                // height:45
              },
            ]}>
            <Text
              style={{
                fontWeight: 'bold',
                right: 7,
                color: 'grey',
                fontSize: 19,
              }}>
              تفاصيل حديد التسليح في المشاريع
            </Text>
            <MaterialCommunityIcons
              name="arrow-right-circle-outline"
              size={20}
              color="grey"
            />
          </View>
        </View>
        <View
          style={{
            top: 40,
            height: 400,
            alignItems: 'flex-end',
            backgroundColor: 'black',
            padding: 20,
            justifyContent: 'center',
            paddingHorizontal: 10,
          }}>
          <Text
            style={[
              Styles.head,
              {
                color: 'white',
                padding: 10,
                borderBottomColor: '#DB9A11',
                borderBottomWidth: 3,
              },
            ]}>
            {' '}
            خدماتنا
          </Text>

          <View
            style={{
              top: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              alignContent: 'space-around',
              alignSelf: 'center',
              alignContent: 'space-around',
              // height:45
            }}>
            <TouchableOpacity style={Styles.foot}>
              <Text style={{color: 'white', fontSize: 20}}>التصميم المعماري </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.foot}>
              <Text style={{color: 'white', fontSize: 20}}>
                 عرض الكل
              </Text>
            </TouchableOpacity>
          </View>
          
          <View
            style={{
              
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              alignContent: 'space-around',
              alignSelf: 'center',
              alignContent: 'space-around',
              // height:45
            }}>
            <TouchableOpacity style={Styles.foot}>
              <Text style={{color: 'white', fontSize: 20}}>الإشراف الهندسي</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.foot}>
              <Text style={{color: 'white', fontSize: 20}}>
              التصميم الإنشائي
              </Text>
            </TouchableOpacity>
          </View>
          
          <View
            style={{
              
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              alignContent: 'space-around',
              alignSelf: 'center',
              alignContent: 'space-around',
              // height:45
            }}>
            <TouchableOpacity style={Styles.foot}>
              <Text style={{color: 'white', fontSize: 20}}> اعمال الديكور </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.foot}>
              <Text style={{color: 'white', fontSize: 20}}>
              إدارة المشاريع
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const Styles = StyleSheet.create({
  box: {
    shadowColor: '#DB9A11',
    shadowRadius: 20,
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    bottom: 30,
    justifyContent: 'space-around',
  },
  txt: {
    fontSize: 20,
    color: 'white',
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    width: 230,
    bottom: 15,
  },
  head: {fontSize: 30, fontWeight: 'bold'},
  foot: {
    borderWidth: 0.5,
    borderColor: 'grey',
    margin: 15,
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
