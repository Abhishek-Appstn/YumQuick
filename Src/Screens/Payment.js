import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import PageHeader from '../Common/PageHeader';
import {useNavigation, useRoute} from '@react-navigation/native';
import Colors from '../Global/Colors';
import Dimensions from '../Global/Dimensions';
import AddressLabel from '../Common/AddressLabel';
import OrderSummary from '../Common/OrderSummary';
import {Card} from '../assets/Images';
import CustomButton from '../Common/customButton';

const Payment = () => {
  const route = useRoute();
  const {height, width} = Dimensions;
  const navigation=useNavigation()
  const PaymentMethods = props => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: Colors.Orange_3,
          paddingBottom: height * 0.02,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            borderColor: Colors.orange_Base,
            paddingBottom: height * 0.016,
            paddingTop: height * 0.02,
          }}>
          <Text style={{fontSize: 17, fontWeight: '500'}}>Payment Method</Text>
          <Pressable
            style={{
              width: width * 0.13,
              height: width * 0.04,
              paddingHorizontal: 5,
              backgroundColor: Colors.Orange_3,
              borderRadius: width,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: Colors.orange_Base,
                fontWeight: '400',
                fontSize: 11,
              }}>
              Edit
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{height: height * 0.02, width: width * 0.06}}
              source={Card}
              resizeMode="cover"
            />
            <Text style={{marginHorizontal: width * 0.02,fontWeight:'300'}}>Credit Card</Text>
          </View>

          <Text
            style={{
              padding: width * 0.009,
              paddingHorizontal: width * 0.03,
              backgroundColor: Colors.yellow,
              borderRadius: width,fontWeight:'300'
            }}>
            *** *** ** 43 /00 /000
          </Text>
        </View>
      </View>
    );
  };

  const DeliveryTime = props => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: Colors.Orange_3,
          paddingBottom: height * 0.02,
        }}>
        <View
          style={{
            paddingTop: height * 0.02,
            paddingBottom: height * 0.02,
          }}>
          <Text style={{fontSize: 17, fontWeight: '500'}}>Delivery Time</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight:'300'}}>Estimated Delivery</Text>
          </View>

          <Text
            style={{
              color: Colors.orange_Base,
              fontSize: 18,
              fontWeight: '600',
            }}>
            25 Mins
          </Text>
        </View>
      </View>
    );
  };
  return (
    <>
      <PageHeader Title="Payment" />
      <View
        style={{
          top: -width * 0.06,
          height: height * 0.74,
          borderTopLeftRadius: width * 0.088,
          borderTopRightRadius: width * 0.088,
          backgroundColor: Colors.White_1,
          alignItems: 'center',
          paddingTop: 10,
          paddingBottom: 0,
        }}>
        <View style={{width: width * 0.88}}>
          <AddressLabel />
          <OrderSummary type="payment" />
          <PaymentMethods />
          <DeliveryTime />
          <View style={{alignItems: 'center', marginVertical: height * 0.12}}>
            <CustomButton
              type="medium-small"
              buttonColor={Colors.Orange_2}
              title="Pay Now"
              textColor={Colors.orange_Base} onPress={()=>navigation.navigate('Delivery Time')}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Payment;
