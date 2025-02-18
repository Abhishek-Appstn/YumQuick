import {View, Text, SafeAreaView, Animated, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import Dimensions from '../Global/Dimensions';
import Colors from '../Global/Colors';
import PageHeader from '../Common/PageHeader';
import Entypo from 'react-native-vector-icons/FontAwesome6';
import StarComponent from '../Common/StarComponent';
import { useNavigation } from '@react-navigation/native';

const Confirmation = props => {
  const {height, width} = Dimensions;
  const navigation=useNavigation()
  const Info =
    props.type === 'Cancel' ? 'Order Cancelled!' : props.type === 'Delivered'?"Order Delivered!":'Order Confirmed!';
  const SubData =
    props.type === 'Cancel'
      ? 'Your order has been successfully Cancelled'
      : props.type === 'Delivered'?"Your order has been succesfully delivered, enjoy it!":
      'Your order has been Placed successfully ';
  const [AnimationComplete, setAnimationComplete] = useState(false);
  const View1 = new Animated.Value(0);
  const View2 = new Animated.Value(0);
  const View3 = new Animated.Value(0);
  const View4 = new Animated.Value(0);

  useEffect(() => {
    setAnimationComplete(false);
    Animated.sequence([
      Animated.timing(View1, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(View2, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(View3, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => setAnimationComplete(true));
  }, []);

  useEffect(() => {
    Animated.timing(View4, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [AnimationComplete]);
  const animatedStyle1 = {opacity: View1};
  const animatedStyle2 = {opacity: View2};
  const animatedStyle3 = {opacity: View3};
  const animatedStyle4 = {opacity: View4};

  return (
    <SafeAreaView
      style={{
        height: height,
        width: width,
        backgroundColor: Colors.yellow_Base,
        alignItems: 'center',
      }}>
      <PageHeader />
      <View style={{alignItems: 'center', width: width, height: height * 0.6}}>
        <View
          style={{
            height: width * 0.4,
            width: width * 0.4,
            borderRadius: (width * 0.4) / 2,
            borderColor: Colors.orange_Base,
            borderWidth: 8,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            marginVertical: 16,
          }}>
          {!AnimationComplete ? (
            <>
              <Animated.View
                style={[
                  {
                    height: width * 0.05,
                    width: width * 0.05,
                    borderRadius: (width * 0.4) / 2,
                    backgroundColor: Colors.orange_Base,
                  },
                  animatedStyle1,
                ]}
              />
              <Animated.View
                style={[
                  {
                    height: width * 0.05,
                    width: width * 0.05,
                    borderRadius: (width * 0.4) / 2,
                    backgroundColor: Colors.orange_Base,
                  },
                  animatedStyle2,
                ]}
              />
              <Animated.View
                style={[
                  {
                    height: width * 0.05,
                    width: width * 0.05,
                    borderRadius: (width * 0.4) / 2,
                    backgroundColor: Colors.orange_Base,
                  },
                  animatedStyle3,
                ]}
              />
            </>
          ) : null}

          <Animated.View style={animatedStyle4}>
            {AnimationComplete ? (
              props.typpe === 'cancel' ? (
                <Entypo name="xmark" size={100} color={Colors.orange_Base} />
              ) : (
                <Entypo name="check" size={100} color={Colors.orange_Base} />
              )
            ) : null}
          </Animated.View>
        </View>
        <Text style={{fontWeight: '900', fontSize: 25, letterSpacing: 1.5}}>
          {Info}{' '}
        </Text>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 15,
            textAlign: 'center',
            width: width * 0.7,
            marginVertical: 15,
          }}>
          {SubData}{' '}
        </Text>
        {props.type=='Delivered'?<>
        <Text>Rate your Delivery</Text>
        <StarComponent maxStars={5}/></>:props.type=='Confirmed'?<>
        <Text style={{marginVertical:10}}>Delivery by Thu, 29th, 4:00 PM</Text>
        <Pressable style={{marginVertical:10}} onPress={()=>navigation.navigate('OrderDetails')}>
        <Text style={{color:Colors.orange_Base,fontFamily:'LeagueSpartan-Medium',fontSize:20}}>Track my order</Text>
        </Pressable>

        </>:null}
      </View>
      <Text style={{fontSize: 15, textAlign: 'center', width: width * 0.9}}>
        If you have any question reach directly to our customer support{' '}
      </Text>
    </SafeAreaView>
  );
};

export default Confirmation;
