import { View, Text, SafeAreaView, Pressable, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import Dimensions from '../Global/Dimensions'
import { Plus } from '../assets/Images'
import CustomTextInput from '../Common/CustomTextInput'
import CustomButton from '../Common/customButton'
import { addDoc, collection, getFirestore, query } from '@react-native-firebase/firestore'

const AddProduct = () => {
    const {height,width}=Dimensions
    const [FormData, setFormData] = useState({price:''})
    const HandleText=(text,key)=>{
setFormData({
    ...FormData,
    [key]:text
})
    }
    const HandleCreate=async()=>{
        const db=getFirestore()
        const dbref=collection(db,"Products")
        try {
            const docref = await addDoc(dbref, { ...FormData});
            Alert.alert('Created', docref.id);
        } catch (err) {
            console.log(err);
            Alert.alert('Error');
        }
    }
  return (
   <SafeAreaView style={{alignItems:'center',marginTop:25}}>
    <Text style={{color:'#000',fontSize:27}}>{FormData.price}${FormData.name},{FormData.description}</Text>
<Pressable style={{height:height*.25,width:width*.4,backgroundColor:'#dca2eb',borderRadius:20,alignItems:'center',justifyContent:'space-evenly'}}>
         <Image source={Plus} style={{height:50,width:50}}/>
            <Text>Upload Product Image</Text>
        </Pressable>
        <CustomTextInput name="Product Name" width={width*.9} placeholder="Product Name" onChangeText={text=>HandleText(text,'name')}/>
        <CustomTextInput name="Description" width={width*.9} placeholder="Description" onChangeText={text=>HandleText(text,'description')}/>
        <CustomTextInput name="Price" width={width*.9} placeholder="Price" onChangeText={text=>HandleText(text,'price')}/>
<CustomButton title="Create Product" onPress={HandleCreate}/>
    </SafeAreaView>
  )
}

export default AddProduct