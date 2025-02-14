import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import PageHeader from '../Common/PageHeader'
import { useNavigation, useRoute } from '@react-navigation/native'
import Colors from '../Global/Colors'
import Dimensions from '../Global/Dimensions'
import AddressLabel from '../Common/AddressLabel'
import OrderSummary from '../Common/OrderSummary'
import CustomButton from '../Common/customButton'

const ConfirmOrder = () => {
    const route=useRoute()
    const {height,width}=Dimensions
    const navigation=useNavigation()
    
  return (
    <>
    <PageHeader Title='Confirm Order'/>
        <View  style={{
                  top: -width * 0.06,
                  width: width,
                  height:height*.74,
                  borderTopLeftRadius: width * 0.088,
                  borderTopRightRadius: width * 0.088,
                  backgroundColor:Colors.White_1,
                
                
                  paddingBottom: 0,       

                }}>
                    <ScrollView>

                    <View style={{marginHorizontal:width*.07}}>
    <AddressLabel/>
    <OrderSummary/>
    <View style={{alignItems:'center'}}>
    <CustomButton type='small-long'buttonColor={Colors.Orange_2} textColor={Colors.orange_Base}title="Place Order" onPress={()=>{navigation.navigate("Payment")}}/>

    </View>
    </View>
    </ScrollView>

    </View>
    </>

  )
}

export default ConfirmOrder