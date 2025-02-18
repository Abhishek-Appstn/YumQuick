import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import PageHeader from '../Common/PageHeader'
import { useNavigation, useRoute } from '@react-navigation/native'
import Colors from '../Global/Colors'
import Dimensions from '../Global/Dimensions'
import AddressLabel from '../Common/AddressLabel'
import OrderSummary from '../Common/OrderSummary'
import CustomButton from '../Common/customButton'
import Layout from './Layout'

const OrderDetails = (props) => {
    const route=useRoute()
    const {height,width}=Dimensions
    const navigation=useNavigation()
    const OrderID=(props)=>{
return(
    <View>
        <Text style={{fontFamily:'LeagueSpartan-Medium',fontSize:20}}>Order No.9384384 {props.orderid}</Text>
        <Text style={{fontFamily:'LeagueSpartan-Light',fontSize:14}}>29 Nov, 01:20pm{props.date}</Text>

    </View>
)
    }
  return (
    <>
    <PageHeader Title='Order Details'/>
      <Layout>
                    <ScrollView contentContainerStyle={{marginTop:height*.04}}>

                    <View >
<OrderID/>
    <OrderSummary data ={props} HeaderHide={true}/>
    <View style={{alignItems:'center'}}>
    <CustomButton type='small-long'buttonColor={Colors.Orange_2} textColor={Colors.orange_Base}title="Order Again" onPress={()=>{navigation.navigate("Payment")}}/>

    </View>
    </View>
    </ScrollView>

    </Layout>
    
    </>

  )
}

export default OrderDetails