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

const ConfirmOrder = () => {
    const route=useRoute()
    const {height,width}=Dimensions
    const navigation=useNavigation()
    
  return (
    <>
    <PageHeader Title='Confirm Order'/>
      <Layout>
                    <ScrollView contentContainerStyle={{marginTop:height*.024}}>

                    <View >
    <AddressLabel/>
    <OrderSummary/>
    <View style={{alignItems:'center'}}>
    <CustomButton type='small-long'buttonColor={Colors.Orange_2} textColor={Colors.orange_Base}title="Place Order" onPress={()=>{navigation.navigate("Payment")}}/>

    </View>
    </View>
    </ScrollView>

    </Layout>
    
    </>

  )
}

export default ConfirmOrder