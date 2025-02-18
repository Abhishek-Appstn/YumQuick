import {View, Text, Image, Pressable, FlatList, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Delete, Milkshake, Minus, Pen_edit, Plus} from '../assets/Images';
import Dimensions from '../Global/Dimensions';
import Colors from '../Global/Colors';
import CustomButton from './customButton';

const OrderSummary = props => {
  const {height, width} = Dimensions;
  const [count, setcount] = useState(0);
  const data = [
    {
      name: 'Strawberry Shake',
      price: 20.4,
      date: '29 Nov, 15:20 pm',
      qty: 2,
      subTotal: 40.0,
    },
    {
      name: 'Strawberry Shake',
      price: 20.4,
      date: '29 Nov, 15:20 pm',
      qty: 2,
    },
    {
      name: 'Strawberry Shake',
      price: 20.4,
      date: '29 Nov, 15:20 pm',
      qty: 2,
    },
    {
      name: 'Strawberry Shake',
      price: 20.4,
      date: '29 Nov, 15:20 pm',
      qty: 2,
    },
  ];
  const ListFooter = () => {
    return (
      <View style={{}}>
        <View
          style={{
            borderColor: Colors.Orange_2,
            borderTopWidth: 1,
            marginTop: 10,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5,
            paddingVertical: 10,
          }}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>Subtotal</Text>
          <Text style={{fontSize: 16, fontWeight: '500'}}>$ 32.00</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>Tax and Fees</Text>
          <Text style={{fontSize: 16, fontWeight: '500'}}>$ 5.00</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>Delivery</Text>
          <Text style={{fontSize: 16, fontWeight: '500'}}>$ 3.00</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5,
            borderTopColor: Colors.Orange_2,
            borderColor: 'transparent',
            borderTopWidth: 1,
            paddingTop: 15,
            borderStyle: 'dashed',
          }}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>Total</Text>
          <Text style={{fontSize: 16, fontWeight: '500'}}>$ 32.00</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          borderColor: Colors.orange_Base,
          borderBottomWidth: props.type == 'payment' ? 0 : 0.3,
          paddingBottom: height * 0.016,
          paddingTop: height * 0.01,
        }}>
      {props.HeaderHide? null:<> <Text style={{fontSize: 17, fontWeight: '500'}}>Order Summary</Text>
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
        </>
}
      </View>
      {props.type !== 'payment' ? (
        <View style={{height: height * 0.5}}>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 10}}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    paddingTop: 20,
                    paddingBottom: 10,
                    borderColor: Colors.Orange_2,
                    borderBottomWidth: 1,
                  }}>
                  <Image
                    source={Delete}
                    style={{position: 'absolute', right: 5, top: 10}}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Image
                      source={Milkshake}
                      style={{
                        height: height * 0.12,
                        width: width * 0.16,
                        borderRadius: (width * 0.1) / 2,
                      }}
                      resizeMode="cover"
                    />
                    <View style={{justifyContent: 'space-between'}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginVertical: 5,
                        }}>
                        <Text style={{fontSize: 15, fontWeight: '600'}}>
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: '600',
                            color: Colors.orange_Base,
                          }}>
                          $ {parseFloat(item.price * item.qty).toFixed(2)}
                        </Text>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginVertical: 5,
                          width: width * 0.65,
                        }}>
                        <Text style={{fontSize: 14, fontWeight: '300'}}>
                          {item.date}
                        </Text>
                        <Text style={{fontSize: 14, fontWeight: '300'}}>
                          {item.qty} items
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <CustomButton
                          type="tiny-Xlong"
                          buttonColor={Colors.Orange_3}
                          title="Cancel Order"
                          textColor={Colors.orange_Base}
                        />
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: width * 0.23,
                            alignItems: 'center',
                          }}>
                          <Image source={Pen_edit} />
                          <Pressable
                            style={{
                              height: height * 0.025,
                              width: height * 0.025,
                              borderRadius: height,
                              backgroundColor: Colors.orange_Base,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                            onPress={() => {
                              count > 0 ? setcount(count - 1) : null;
                            }}>
                            <Image source={Minus} />
                          </Pressable>
                          <Text style={{fontWeight: '400', fontSize: 15}}>
                            {count}
                          </Text>
                          <Pressable
                            style={{
                              height: height * 0.025,
                              width: height * 0.025,
                              borderRadius: height,
                              backgroundColor: Colors.orange_Base,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                            onPress={() => {
                              setcount(count + 1);
                            }}>
                            <Image source={Plus} />
                          </Pressable>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />
          <ListFooter />
        </View>
      ) : (
        <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:Colors.Orange_3,alignItems:'center',paddingBottom:height*.02}}>
          <FlatList
          scrollEnabled={false}
            data={data}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                   
                    justifyContent: 'space-between',
                    
                  }}>

                  <View style={{flexDirection: 'row',marginVertical:height*.002}}>
                    <Text style={{fontSize: 12,fontWeight:'300'}}>{item.name}</Text>
                    
                    <View style={{marginLeft: width * 0.05, }}>
                      <Text style={{fontSize: 12, color: Colors.orange_Base}}>
                        {item.qty} items
                      </Text>
                    </View>

                  </View>


             
                
                </View>
              );
            }}
          />
               <View style={{ alignItems:'flex-end',}}>
                    <Text style={{fontSize:19,fontWeight:'500'}}>$ {parseFloat(100).toFixed(2)}</Text>
                    
                  </View>
        </View>
      )}
    </View>
  );
};

export default OrderSummary;
