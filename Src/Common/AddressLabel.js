import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Pen_edit } from '../assets/Images'
import Dimensions from '../Global/Dimensions'
import Colors from '../Global/Colors'
import { useNavigation } from '@react-navigation/native'

const AddressLabel = () => {
  const navigation=useNavigation()
    const {height,width}=Dimensions
    const [SelectedAddress, setSelectedAddress] = useState('778 Locust View Drive Oaklanda, CA')
  return (
    <View style={{height:height*.085,justifyContent:'space-between',marginBottom:24}}>
    <View style={{flexDirection:'row',alignItems:'baseline',height:height*.045}} >
      <Text style={{fontSize:18.5,fontWeight:'700'}}>Shipping Address</Text>
      <Pressable onPress={()=>{navigation.navigate('AddressSelection')}}>
      <Image style={{height:height*.012,width:height*.012 ,marginLeft:9}} source={Pen_edit} />
      </Pressable>
    </View>
    <Text style={{backgroundColor:Colors.yellow,padding:10,borderRadius:width,fontSize:13}}>{SelectedAddress}</Text>
    </View>
  )
}

export default AddressLabel