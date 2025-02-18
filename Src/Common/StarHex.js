import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../Global/Colors'

const StarHex = ({height,width,style}) => {
  const fontSize=height*.35
  return (
     <View style={[{alignSelf:'center'},style]}>
              <View style={{height:height,width:height,backgroundColor:'red'}}/>
              <View style={{height:height,width:height,backgroundColor:'red',position:'absolute', transform:[{rotate:'30deg'}]}}/>
              <View style={{height:height,width:height,backgroundColor:'red',position:'absolute', transform:[{rotate:'60deg'}]}}>
                </View>
                <Text style={{position:'absolute',alignSelf:'center',top:height*.3,color:Colors.White_1,fontWeight:'900',fontSize:fontSize}}>30%</Text>
              </View>
  )
}

export default StarHex