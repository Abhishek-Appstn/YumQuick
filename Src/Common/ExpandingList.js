import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  Alert,
  Animated,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Dimensions from '../Global/Dimensions';
import {
  Arrow_Down,
  Arrow_Up,
  Facebook,
  Headphones,
  Instagram,
  Website,
  WhatApp,
} from '../assets/Images';
import Colors from '../Global/Colors';

const ExpandingList = (props) => {
  const {height, width} = Dimensions;
  const [Expanded, setExpanded] = useState(false);
  const [ActiveIndex, setActiveIndex] = useState(null);

  const Data = props.Data;

  return (
    <>
                {props.Type!=='iconList'?<View style={{borderBottomWidth:.4,borderColor:Colors.orange_Base,}}/>:null}

      <FlatList
        data={Data}
        renderItem={({item, index}) => {
          return (
            <View style={{alignItems:'center'}} >
              <Pressable
                style={{
                  width: width * 0.88,
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingVertical: 10,
                  marginVertical: 5,borderColor:Colors.orange_Base,borderBottomWidth:props.Type==='iconList'?0:.4
                }}
                onPress={() => {
                    ActiveIndex==index?
                  setActiveIndex(null):setActiveIndex(index),
                    index == ActiveIndex
                      ? setExpanded(!Expanded)
                      : setExpanded(true);
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
            
                 {props.Type=='iconList'? <Image
                    source={item.Icon}
                    style={{
                      height: height * 0.03,
                      width: width * 0.1,
                      resizeMode: 'contain',
                    }}
                  />:null}
                  <Text
                    style={[{
                      marginHorizontal: 10,
                      fontSize: 18,
                      fontWeight: '600',
                      color:props.Type!=='iconList'?ActiveIndex!==index?Colors.orange_Base :Colors.Font:null,
                    },props.HeaderTextStyle]}>
                    {item.Name}
                  </Text>
                </View>

                <Image
                  source={Arrow_Down}
                  style={{
                    height: 15,
                    width: 15,
                    transform: [
                      {rotate: index !== ActiveIndex ? '0deg' : '180deg'},
                    ],
                  }}
                  resizeMode="contain"
                />
              </Pressable>
              {Expanded ? (
                index == ActiveIndex ? (
                  <Text style={{paddingHorizontal:width*.034,marginVertical:5,textAlign:'justify',width:width*.94}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.</Text>
                ) : null
              ) : null}
            </View>
          );
        }}
      />
    </>
  );
};

export default ExpandingList;
