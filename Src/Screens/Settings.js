import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import PageHeader from '../Common/PageHeader'
import Dimensions from '../Global/Dimensions'
import Colors from '../Global/Colors'
import ExpandingList from '../Common/ExpandingList'
import { Bell, Key, User } from '../assets/Images'
import { useNavigation } from '@react-navigation/native'

const Settings = () => {
    const{height,width}=Dimensions
    const navigation=useNavigation()

    const Data=[
        {Name:'Notification setting',Icon:Bell},
        {Name:'Password setting',Icon:Key},
        {Name:'Delete Account',Icon:User},
    ]
    useEffect(() => {
      setTimeout(() => {
        navigation.navigate('NotificationSettings')
      }, 2000);
    }, [])
    
  return (
    <>
    <PageHeader Title="Settings"/>
    <View style={{
            top: -width * 0.05,
            borderRadius: width * 0.06,
            backgroundColor: Colors.White_Bg,
            height: 600,
            padding: 20,
          }}>
     <ExpandingList Data={Data}Type='iconList'/>
    </View>
    </>
  )
}

export default Settings