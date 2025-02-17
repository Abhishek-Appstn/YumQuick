import {View, Text, TextInput, Pressable, Image, Alert} from 'react-native';
import React from 'react';
import colors from '../../Global/Colors';
import Dimensions from '../../Global/Dimensions';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Bell, Cart, Shopping_Cart, User } from '../../assets/Images';

const SearchBar = (props) => {
  const navigation=useNavigation()
  const Data = [
    {image: Shopping_Cart, Id: 1 ,},
    {image: Bell, Id: 2},
    {image: User, Id: 3},
  ];
  const handleNavigation=(path)=>{
    navigation.navigate('Cdrawer',{Data:'Hello'})
   navigation.dispatch(DrawerActions.openDrawer())
  }
  const {height,width}=Dimensions
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal:width*.05
      }}>
      <View
        style={[{
          borderRadius: width*.6,
          width: width*.5,
          height: width*.08,
          backgroundColor: colors.White_1,
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10
        },props.ButtonStyle]}>
        <TextInput style={{width: width*.42, height: width*.08}} placeholder="Search" />
        <Pressable
          style={{
            width: width*.05,
            height: width*.05,
            borderRadius: 26,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
           navigation.navigate('Drawer')
          }}>
          <Image
            source={require('../../assets/Images/Slider.png')}
            style={{width: height*.015, resizeMode: 'contain'}}
          />
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          // width:width*.2
        }}>
          
        {!props.Icon? Data.map(item => (
          <Pressable
            key={item.Id}
            style={{
              width: width * 0.07,
              height: width * 0.07,
              borderRadius: width*.03,
              backgroundColor: colors.White_1,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal:width*.009
            }}
            onPress={() => {handleNavigation()}}>
            <Image
              source={item.image}
              style={{height: width * 0.045, width: width * 0.045, resizeMode: 'contain'}}
            />
          </Pressable>
  
        )):null}
      </View>
    </View>
  );
};

export default SearchBar;
