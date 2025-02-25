import { View, Text, TextInput, Pressable, Image } from 'react-native'
import React from 'react'
import Dimensions from '../Global/Dimensions'
import Colors from '../Global/Colors'
import { useNavigation } from '@react-navigation/native'

const NsearchBar = (props) => {
    const {height,width}=Dimensions
    const navigation=useNavigation()
  return (
   <View
           style={[{
             borderRadius: width*.6,
             width: props.width?props.width:width*.5,
             height:props.height?props.height: width*.08,
             backgroundColor: Colors.White,
             justifyContent: 'center',
             flexDirection: 'row',
             alignItems: 'center',
             padding: 10
           },props.ButtonStyle]}>
           <TextInput style={{width: props.width?props.width*.8:width*.42, height: props.height?props.height: width*.08,paddingHorizontal:10}} placeholder="Search" />
           <Pressable
             style={{
               width:props.width?props.width*.1: width*.05,
               height:props.height?props.height*.7: width*.05,
               borderRadius: 26,
               backgroundColor: Colors.orange_Base,
               alignItems: 'center',
               justifyContent: 'center',
             }}
             onPress={() => {
              navigation.navigate('SupportChat')
             }}>
             <Image
               source={require('../assets/Images/Slider.png')}
               style={{width:props.width?props.width*.05:height*.015, resizeMode: 'contain'}}
             />
           </Pressable>
         </View>
  )
}

export default NsearchBar