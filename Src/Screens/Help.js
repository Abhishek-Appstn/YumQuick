
import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import PageHeader from '../Common/PageHeader'
import Layout from './Layout'
import Colors from '../Global/Colors'
import { Arrow_Right, Back } from '../assets/Images'
import Dimensions from '../Global/Dimensions'
import { useNavigation } from '@react-navigation/native'

const Help = () => {
    const {height,width}=Dimensions
    const navigation=useNavigation()
    const Data=[
        {Title:'Help with the order',Desc:'Support'},
        {Title:'Help Center',Desc:'General Information'},
    ]
  return (
    <View>
    <PageHeader Title="Help"/>
    <Layout>
        <View style={{marginTop:width*.08}}>

        <Text style={{fontFamily:'LeagueSpartan-Light'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor.</Text>
    <View style={{borderColor:Colors.Orange_3,borderWidth:1,marginTop:width*.08}}/>
    <FlatList data={Data} renderItem={({item,index})=>{
        return(
<Pressable style={{borderBottomWidth:1,borderColor:Colors.Orange_3,justifyContent:'center',height:width*.22}} onPress={()=>navigation.navigate("ContactUs")}>
<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<Text style={{fontFamily:'LeagueSpartan-Medium',fontSize:20}}>{item.Title}</Text>
<Image source={Arrow_Right}/>
    </View>

    <Text style={{fontFamily:'LeagueSpartan-Light',fontSize:16,marginTop:5}}>{item.Desc}</Text>


    </Pressable>
        )
    }}/>
        </View>
    </Layout>

    </View>
  )
}

export default Help