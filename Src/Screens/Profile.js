import {View, Text, Image, FlatList, Pressable, Alert} from 'react-native';
import React from 'react';
import PageHeader from '../Common/PageHeader';
import Colors from '../Global/Colors';
import Dimensions from '../Global/Dimensions';
import {Camera, ChickenCurry, UserDp} from '../assets/Images';
import CustomTextInput from '../Common/CustomTextInput';
import CustomButton from '../Common/customButton';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const {height, width} = Dimensions;
  const data = [
    {name: 'Full Name'},
    {name: 'Date of Birth'},
    {name: 'Email'},
    {name: 'Phone Number'},
  ];
  const navigation=useNavigation()
  return (
    <>
      <PageHeader Title="My profile" />
      <View
        style={{
          backgroundColor: Colors.White_Bg,
          top: -19,
          height: width * 1.77,
          borderRadius: 27,
          padding: 20,
          alignItems: 'center',
        }}>
            <View style={{
            height: height * 0.17,
            width: width * 0.37,
            borderRadius: (width * 0.22) / 3,
            resizeMode: 'contain',
          }}
        >
            <Image
          source={UserDp} style={{
            height: height * 0.17,
            width: width * 0.37,
            borderRadius: (width * 0.22) / 3,
            resizeMode: 'contain',
          }}
        />
          <Pressable  style={{position:'absolute',zIndex:5,right:-5,bottom:2,backgroundColor:Colors.orange_Base,padding:6,borderRadius:10}} onPress={()=>{
            Alert.alert("Profile Image Upload","Comming soon")
          }}>
          <Image
          source={Camera} 
        />
          </Pressable>
        
            </View>
        
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            return (
              <View>
                <CustomTextInput
                name={item.name}
                  backgroundColor={Colors.yellow}
                  width={width}
                  placeholder={item.name}
                />
              </View>
            );
          }}
        />
        <CustomButton
          type="medium"
          StyleText={{fontSize: 16, fontWeight: '800'}}
          title="Update Profile"
          onPress={()=>{navigation.navigate('AddressSelection')}}
        />
      </View>
    </>
  );
};

export default Profile;
