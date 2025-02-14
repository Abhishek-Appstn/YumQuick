import {Text, SafeAreaView, StyleSheet, ImageBackground, Image, View } from 'react-native'
import React, { useEffect } from 'react'
import colors from '../Global/Colors'
import { useNavigation } from '@react-navigation/native'
import Dimensions from '../Global/Dimensions'
import { YumSplash } from '../assets/Images'
const {height,width}=Dimensions
const Splash = () => {
  const navigation=useNavigation()
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('landingPage')
    }, 5000);
  
    
  }, [])
  
  return (
    <View style={styles.container}>
    <Image style={styles.Image} source={YumSplash}/>
    <Text style={{fontSize:35,fontWeight:'bold',fontFamily:"Poppins-ExtraBold",color:colors.Orange_Logo,marginVertical:height*.04}}>YUM<Text style={{color:colors.White_1}}>QUICK</Text></Text>
    </View>
  )
}


const styles=StyleSheet.create({
container:{
height:height,width:width,
  backgroundColor:colors.splash_BG,
  justifyContent:'center',
  alignItems:'center'
},
Image:{
  height:width*.5,
  resizeMode:'contain'

}
})

export default Splash