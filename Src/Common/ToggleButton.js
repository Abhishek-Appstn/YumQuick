import { View, Text, Animated, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Colors from '../Global/Colors'
import Animation from '../Screens/Animation'

const ToggleButton = () => {
    const Value1 = useRef(new Animated.Value(0)).current;

   const [Active, setActive] = useState(false)
   const Animations=()=>{

    Animated.timing(Value1,{
        toValue: Active?0:18,
        useNativeDriver:true
    }).start(()=>{setActive(!Active)})
    


   }
   
  return (
    <Pressable style={{width:40,height:20,backgroundColor:Colors.orange_Base,borderRadius:20,justifyContent:'center',paddingHorizontal:2,opacity:Active?.5:1}} onPress={()=>Animations()}>
      <Animated.View style={[{width:18,height:18,borderRadius:10,backgroundColor:Colors.White_1,transform:[{translateX:Value1}]}]}/>
    </Pressable>
  )
}

export default ToggleButton