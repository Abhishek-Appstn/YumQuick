import {View, Text, TextInput, Pressable, Image, Alert} from 'react-native';
import React from 'react';
import colors from '../../Global/Colors';
import Dimensions from '../../Global/Dimensions';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Bell, Cart, Shopping_Cart, User } from '../../assets/Images';
import NsearchBar from '../../Screens/searchBar';

const SearchBar = (props) => {
  const navigation=useNavigation()
  const Data = [
    {image: Shopping_Cart, Id: 1 ,},
    {image: Bell, Id: 2},
    {image: User, Id: 3},
  ];
  const handleNavigation=(path)=>{
    // navigation.navigate('Cdrawer',{Data:'Hello'})
    navigation.navigate('OnboardingScreem')
  //  navigation.dispatch(DrawerActions.openDrawer())
  }
  const {height,width}=Dimensions
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal:width*.05,
     
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          // width:width*.2
          width:width*.9
        }}>
      <NsearchBar/>
          
          <View style={{alignItems:'flex-end',flexDirection:'row'}}>
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
    </View>
  );
};

export default SearchBar;
