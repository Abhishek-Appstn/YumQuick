import {View, Text, Image, FlatList, ScrollView} from 'react-native';
import React from 'react';
import Layout from './Layout';
import {useNavigation, useRoute} from '@react-navigation/native';
import PageHeader from '../Common/PageHeader';
import AddressLabel from '../Common/AddressLabel';
import {Maps} from '../assets/Images';
import Colors from '../Global/Colors';
import Dimensions from '../Global/Dimensions';
import CustomButton from '../Common/customButton';

const DeliveryTime = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {height, width} = Dimensions;
  const Data = [
    {name: 'Your order has been accepted', time: '2 min'},
    {name: 'The restaurant is preparing your order', time: '5 min'},
    {name: 'The delivery is on his way', time: '10 min'},
    {name: 'Your order has been delivered', time: '8 min'},
  ];
  const EstTime = props => {
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
            <Text style={{fontWeight: '300'}}>Estimated Delivery</Text>
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
      <PageHeader Title="Delivery Time" />
      <Layout>
        <ScrollView
          contentContainerStyle={{paddingBottom: 200,marginTop:height*.04}}
          >
          <AddressLabel />
          <Image
            source={Maps}
            resizeMode="cover"
            style={{borderRadius: (width * 0.1) / 2}}
          />
          <EstTime />
          <FlatList
            data={Data}
            renderItem={({item, index}) => {
              return (
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: height * 0.01,
                    }}>
                    <Text style={{fontSize: 13}}> {item.name}</Text>
                    <Text style={{fontSize: 13, textAlign: 'right'}}>
                      {' '}
                      {item.time}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: height * 0.016,
            }}>
            <CustomButton
              type="medium-Xsmall"
              buttonColor={Colors.Orange_3}
              title="Return Home"
              textColor={Colors.orange_Base}
              onPress={() => {
                navigation.navigate('Filter');
              }}
            />
            <CustomButton
              type="medium-Xsmall"
              title="Track Order"
              onPress={() => {
                navigation.navigate('Best Seller');
              }}
            />
          </View>
        </ScrollView>
      </Layout>
    </>
  );
};

export default DeliveryTime;
