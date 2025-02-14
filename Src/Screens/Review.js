import { View, Text, SafeAreaView, Image, TextInput } from 'react-native'
import React from 'react'
import Dimensions from '../Global/Dimensions'
import PageHeader from '../Common/PageHeader'
import { useNavigation } from '@react-navigation/native'
import Colors from '../Global/Colors'
import { ChickenCurry } from '../assets/Images'
import CustomButton from '../Common/customButton'
import StarComponent from '../Common/StarComponent'

const Review = (props) => {
    const {height,width}=Dimensions
    const navigation=useNavigation(0)
const starCount=5
  return (
    <>
    <PageHeader Title="Leave a Review"/>
      
     <View style={{backgroundColor: Colors.White_Bg,
           top: -19,
           height:width*1.77,
           borderRadius: 27,
           padding: 20,alignItems:'center'}}>
<Image source={ChickenCurry} style={{height:height*.17,width:width*.36,borderRadius:width*.22/3}}/>
<Text style={{fontSize:25,fontWeight:'bold',marginVertical:20}}>{props.ItemName}Chicken Curry</Text>
<Text style={{width:width*.7,fontSize:18,textAlign:'center'}}>We'd Love to know what you think of your dish</Text>
<View style={{marginVertical:16}}>
<StarComponent maxStars={starCount}/>

</View>
<Text style={{width:width*.7,fontSize:18,textAlign:'center'}}>Leave us your comment!</Text>
<TextInput
              multiline={true}
              style={{
                backgroundColor: Colors.yellow,
                borderRadius: (width * 0.3) / 6,
                height: width * 0.25,
                width: width * 0.8,
                padding: 15,
               marginVertical:25
              }}
              placeholder="Write Review...."
            />
<View style={{flexDirection:'row',marginVertical:26}}>
    <CustomButton type='small-long' title='Cancel' buttonColor={Colors.Orange_2} textColor={Colors.orange_Base} margin={10} onPress={()=>{navigation.navigate('Profile')}}/>
    <CustomButton type='small-long' title='Submit' margin={10} onPress={()=>{navigation.navigate('Settings')}}/>


    

</View>
        </View>

   
    </>

  )
}

export default Review