import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import PageHeader from '../Common/PageHeader';
import Dimensions from '../Global/Dimensions';
import Colors from '../Global/Colors';
import {Home_Icon} from '../assets/Images';
import CustomTextInput from '../Common/CustomTextInput';
import CustomButton from '../Common/customButton';
import { useNavigation } from '@react-navigation/native';

const AddAddress = () => {
  const {height, width} = Dimensions;
  const Data = [{Name: 'Name'}, {Name: 'Address'}];
  const navigation=useNavigation()
  return (
    <>
      <PageHeader Title="Add New Address" />
      <View
        style={{
          width: width,
          height: height * 0.77,
          backgroundColor: Colors.White_Bg,
          top: -height * 0.028,
          borderRadius: height * 0.04,
          padding: 15,
          alignItems: 'center',justifyContent:'space-between'
        }}>
        <Image
          source={Home_Icon}
          style={{
            height: height * 0.09,
            width: height * 0.09,
            marginVertical: 10,
          }}
          resizeMode="contain"
        />
        <FlatList
          data={Data}
          renderItem={({item, index}) => {
            return (
              <View style={{marginVertical: height * 0.007}}>
                <Text
                  style={{marginVertical: 10, fontWeight: '600', fontSize: 17}}>
                  {item.Name}
                </Text>
                <CustomTextInput
                multiline={item.Name==='Address'?true:false}
                  backgroundColor={Colors.yellow}
                  width={width}
                />
              </View>
            );
          }}
        />
    
        <CustomButton StyleText={{fontWeight:'600'}}type='small-long' title="Apply" onPress={()=>{navigation.navigate('PaymentMethod')}}/>
      </View>
    </>
  );
};

export default AddAddress;
