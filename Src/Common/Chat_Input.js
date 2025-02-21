import {View, Text, Image, Pressable, Alert} from 'react-native';
import React from 'react';
import Dimensions from '../Global/Dimensions';
import Colors from '../Global/Colors';
import {Attachment, Microphone_On, Share_icon} from '../assets/Images';
import {TextInput} from 'react-native-gesture-handler';

const Chat_Input = () => {
  const {height, width} = Dimensions;
  return (
    <View
      style={{
        height: height * 0.13,
        backgroundColor: Colors.Orange_3,
        width: width,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        paddingHorizontal: width * 0.05,
      }}>
      <Pressable
        onPress={() => Alert.alert('Okokok')}
        style={{
          height: width * 0.075,
          width: width * 0.075,
          borderRadius: (width * 0.08) / 2.5,
          backgroundColor: Colors.White,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={Attachment} />
      </Pressable>
      <TextInput
        style={{
          width: width * 0.6,
          backgroundColor: Colors.White,
          height: height * 0.033,
          borderRadius: 10,
          padding: 5,
          fontFamily: 'LeagueSpartan-Thin',
          fontSize: 12.2,
          color: Colors.Black_Text,
        }}
        placeholderTextColor={Colors.Black_Text}
        placeholder="Write Here...."
      />
      <Pressable
        onPress={() => Alert.alert('Okokok')}
        style={{
          height: width * 0.075,
          width: width * 0.075,
          borderRadius: (width * 0.08) / 2.5,
          backgroundColor: Colors.White,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={Microphone_On} />
      </Pressable>
      <Pressable
        onPress={() => Alert.alert('Okokok')}
        style={{
          height: width * 0.075,
          width: width * 0.075,
          borderRadius: (width * 0.08) / 2.5,
          backgroundColor: Colors.White,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={Share_icon} />
      </Pressable>
    </View>
  );
};

export default Chat_Input;
