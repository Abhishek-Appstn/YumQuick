import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Star, Star_Filled } from '../assets/Images'

const StarComponent = ({maxStars}) => {
    const [Rating, setRating] = useState(0)
    const handlePress=(index)=>{
        index===Rating?
        setRating(0):
        setRating(index)
    }
  return (
    <View style={{flexDirection:'row',justifyContent:'space-evenly'}}> 
        {Array.from({length:maxStars}).map((_,index)=>(
            <Pressable onPress={()=>handlePress(index+1)} >

         
          {  index<Rating?
          <Image key={index} source={Star_Filled} style={{marginVertical:15,marginHorizontal:6,height:25,width:25}}/>:
          <Image key={index} source={Star} style={{marginVertical:15,marginHorizontal:6,height:25,width:25}}/>

          }
          </Pressable>
        ))}
    </View>
  )
}

export default StarComponent