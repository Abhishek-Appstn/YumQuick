import { View, Text, TextInput, StyleSheet, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import colors from '../../Global/Colors'
import Dimensions from '../../Global/Dimensions'

const CustomTextInput = (props) => {
    const {height,width}=Dimensions
    const styles=createStyles({props,height,width})
    const [visible, setvisible] = useState(false)
  return (
    <View style={{marginVertical:height*.0015}}>
                    <Text style={styles.subHeaderText}>{props.name}</Text>

    <View style={styles.container}>
        
    <TextInput  multiline={props.multiline?true:false} style={styles.textInput} placeholder={props.placeholder} onChangeText={props.onChangeText} secureTextEntry={(props.type==="password"||props.type==="cpassword")&&!visible?true:false}/>
    {props.type==='password'||props.type==="cpassword"?
    <Pressable onPress={()=>setvisible(!visible)}>{visible?<Image style={styles.icon}source={require('../../assets/Images/Show_On.png')}/>:<Image style={styles.icon}source={require('../../assets/Images/Show_Off.png')}/>}</Pressable>:null} 
   </View>
   </View>
  )
}
const createStyles=({props,height,width})=>StyleSheet.create({
    container:{
        backgroundColor:props.backgroundColor?props.backgroundColor:colors.yellow,
        width:props.type==='Small'?props.width*.3:props.width*.85,
        height:props.multiline?props.width*.16:props.height?props.height:height*.055,
        borderRadius:height*.03/2,
        padding:7,
        marginHorizontal:props?.MarginH,
        flexDirection:'row',alignItems:'center'
    
    },
    textInput:{
        width:props.type==='password'||props.type==="cpassword"?props.width*.75:props.width*.85,
        height:props.width*.14,
        borderRadius:props.width*.08/2,
        padding:7,
        fontSize:15
    },
    icon:{
        height:props.width*.05,
        width:props.width*.05

    },
    subHeaderText: {
          color:colors.Font,
          fontSize: 19,
          fontFamily: 'LeagueSpartan-Medium',
          marginBottom: height * 0.016,
        },
})

export default CustomTextInput