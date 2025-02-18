import { View, Text, FlatList } from 'react-native'
import React from 'react'
import PageHeader from '../Common/PageHeader'
import Layout from './Layout'
import Colors from '../Global/Colors'
import Dimensions from '../Global/Dimensions'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomButton from '../Common/customButton'

const History = (props) => {
    const {height,width}=Dimensions
  return (
    <View>
  <PageHeader Title="History"/>
  <Layout>
<FlatList contentContainerStyle={{height:height}}data={['','']} renderItem={({item,index})=>{
    
return(
    <View style={{borderColor:Colors.orange_Base,borderBottomWidth:1,marginTop:height*.05,paddingBottom:20}}>

<View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>  
        <Text style={{fontFamily:'LeagueSpartan-Medium',fontSize:20}}>Order No.9384384 {props.orderid}</Text>
        <Text style={{fontFamily:'LeagueSpartan-Medium',fontSize:20}}>$50.00{props.orderid}</Text>
    </View>

    <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>  
    <Text style={{fontFamily:'LeagueSpartan-Light',fontSize:14}}>29 Nov, 01:20pm{props.date}</Text>
    <Text style={{fontFamily:'LeagueSpartan-Light',fontSize:14}}>{props.qty}2 items</Text>
</View>

<View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:0}}>  
    <View style={{flexDirection:'row',alignItems:'center'}}><AntDesign name={item.status=='Delivered'?"checkcircleo":'closecircleo'} color={Colors.orange_Base}/><Text style={{marginLeft:5,fontFamily:'LeagueSpartan-Light',fontSize:14,color:Colors.orange_Base}}>{item.status=='Delivered'?"Order Delivered":"Order Cancelled"}</Text></View>
    <CustomButton  type='small'title="Details"/>
</View>
    </View>
      )    }}/>
  </Layout>
    </View>
  )
}

export default History