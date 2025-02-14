import { View, Text } from 'react-native'
import React, { useState } from 'react'
import PageHeader from '../Common/PageHeader'
import Dimensions from '../Global/Dimensions'
import Colors from '../Global/Colors'
import CustomTextInput from '../Common/CustomTextInput'
import CustomButton from '../Common/customButton'

const ChangePassword = () => {
    const {height,width}=Dimensions
    const [currentPassword, setcurrentPassword] = useState('')
    const [NewPassword, setNewPassword] = useState('')
    const [ConfirmNewPassword, setConfirmNewPassword] = useState('')
const handleTextChange=(text,id)=>{
    switch (id) {
        case 'CurrentPassword':
            setcurrentPassword(text)
            break;

            case 'NewPassword':
            setNewPassword(text)
            break;
    
            case 'ConfirmNewPassword':
            setConfirmNewPassword(text)
            break;
    
        default:
            break;
    }
}
  return (
    <>
    <PageHeader Title="Password Setting"/>
   <View style={{
               top: -width * 0.05,
               borderRadius: width * 0.06,
               backgroundColor: Colors.White_Bg,
               height: height*.88,
               padding: 20,
               paddingTop:50
             }}>
                <View style={{alignItems:'center',width:width*.85,alignSelf:'center'}}>
                <Text style={{fontSize:16,fontWeight:'600',marginVertical:10,alignSelf:'flex-start'}}>Current Password</Text>
<CustomTextInput type="password" width={width}buttonColor={Colors.orange_Base} onChangeText={text=>handleTextChange(text,"CurrentPassword")}/>
<Text style={{fontSize:15,fontWeight:'500',marginVertical:10,alignSelf:'flex-end',color:Colors.orange_Base}}>Forgot Password ?</Text>

                </View>
                <View style={{alignItems:'center',width:width*.85,alignSelf:'center',marginVertical:7}}>
                <Text style={{fontSize:16,fontWeight:'600',marginVertical:7,alignSelf:'flex-start'}}>New Password</Text>
<CustomTextInput type="password" width={width}buttonColor={Colors.orange_Base}onChangeText={text=>handleTextChange(text,"NewPassword")}/>
                </View>
                <View style={{alignItems:'center',width:width*.85,alignSelf:'center',marginVertical:10}}>
                <Text style={{fontSize:16,fontWeight:'600',marginVertical:10,alignSelf:'flex-start'}}>Confirm New Password</Text>
<CustomTextInput type="password" width={width}buttonColor={Colors.orange_Base}onChangeText={text=>handleTextChange(text,"ConfirmNewPassword")}/>
                </View>
                <View style={{justifyContent:'flex-end',height:height*.3}}>
                <CustomButton StyleText={{fontWeight:'600'}}type='medium-long' title="Change Password"/>

                </View>

    </View>
    </>

  )
}

export default ChangePassword