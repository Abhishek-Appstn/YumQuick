import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import PageHeader from '../Common/PageHeader'
import Colors from '../Global/Colors'
import Dimensions from '../Global/Dimensions'
import ToggleButton from '../Common/ToggleButton'
import { useNavigation } from '@react-navigation/native'

const NotificationSettings = () => {
    const navigation=useNavigation()
    useEffect(() => {
      setTimeout(() => {
        navigation.navigate('ChangePassword')
      }, 2000);
    }, [])
    
    const{height,width}=Dimensions
    const Data=[
        {Name:'General Notification'},
        {Name:'Sound'},
        {Name:'Sound Call'},
        {Name:'Vibrate'},
        {Name:'Special Offers'},
        {Name:'Payments'},
        {Name:'Promo and Discount'},
        {Name:'Cashback'},
    ]
  return (
    <>
    <PageHeader Title="NotificationSettings"/>
  <View style={{
            top: -width * 0.05,
            borderRadius: width * 0.06,
            backgroundColor: Colors.White_Bg,
            height: height*.88,
            padding: 20,
            paddingTop:50
          }}>
            <FlatList data={Data} renderItem={({item,index})=>{
                return(
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:height*.02}}>
                    <Text style={{fontSize:17,fontWeight:'500'}}>{item.Name}</Text>
                    <ToggleButton/>
                    </View>
                )
            }}/>
           
     
      
    </View>
    </>
  )
}

export default NotificationSettings