import {View, Text, FlatList, Image, SafeAreaView, Pressable} from 'react-native';
import React from 'react';
import Colors from '../Global/Colors';
import Dimensions from '../Global/Dimensions';
import {Clipboard, Dine, Heart, Home_White, Support} from '../assets/Images';
import {Home_Icon} from '../assets/Images';
import { useNavigation } from '@react-navigation/native';

const CustomBottomTab = () => {
  const {height, width} = Dimensions;
  const navigation=useNavigation()
  const Data = [
    {Name: 'Home', Icon: Home_White, navigate:'Dashboard'},
    {Name: 'Dine', Icon: Dine,navigate:'Home'},
    {Name: 'Favourite', Icon: Heart,navigate:'Favorites'},
    {Name: 'Orders', Icon: Clipboard,navigate:'Orders'},
    {Name: 'Support', Icon: Support,navigate:'Home'},
  ];
  return (
    <SafeAreaView
      style={{
        height: height * 0.09,
        borderRadius: height * 0.04,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: Colors.orange_Base,
        alignItems: 'center',
      }}>
      <FlatList
        data={Data}
        scrollEnabled={false}
        horizontal
        contentContainerStyle={{
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: width,
          height: height * 0.07,
        }}
        renderItem={({item, index}) => {
          return (
            <Pressable onPress={()=>{navigation.navigate(item.navigate)}}>

            <Image
              source={item.Icon}
              style={{height: height * 0.033, width: height * 0.033}}
              resizeMode="contain"
            />
            </Pressable>

          );
        }}
      />
    </SafeAreaView>
  );
};

export default CustomBottomTab;
