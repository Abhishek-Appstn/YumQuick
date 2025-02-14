import { View, Text, FlatList, ImageBackground, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Dimensions from '../../Global/Dimensions'
import Colors from '../../Global/Colors'
import { useNavigation } from '@react-navigation/native'
const {height,width}=Dimensions
const ImageView = (props) => {
    const styles=createStyles({height,width,props})
    const navigation=useNavigation()
  return (
   <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
          horizontal={props.type=='large'?false:true}
          numColumns={props.type==='large'?2:null}
          data={props.data}
         
          
          renderItem={({item, index}) => {
            return (
                <Pressable style={styles.imageWrapper} onPress={()=>{navigation.navigate('ProductPage',{item})}}>
            <ImageBackground source={item.image} style={styles.image}>
              
              <View style={styles.priceContainer}>
              <Text style={styles.priceText}> ${item.price}</Text>
                  </View>
            </ImageBackground>
            </Pressable>)
          }}
        />
  )
}
const createStyles=({height,width,props})=>StyleSheet.create({
    imageWrapper:{
        overflow:'hidden',height:width*.4,width:props.type==='large'?width*.45:width*.24,borderRadius:width*.4/4
    },
    image: {
          width: props.type==='large'?width*.4:width*.2,
          height: props.type==='large'?width*.4:width*.3,
          marginVertical:10,
          marginHorizontal:6,borderRadius:100,
          resizeMode:'cover'
        },
        priceContainer:{
            backgroundColor:Colors.orange_Base,
            width:width*.12,
            height:width*.055,
            position:'absolute',
            bottom:10,right:0,borderTopLeftRadius:20,borderBottomLeftRadius:20,
           justifyContent:'center',alignItems:'center'
        },
        priceText:{
            color:Colors.White_1,fontSize:12,fontWeight:'500',
        }
})

export default ImageView