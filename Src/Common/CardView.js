import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import Dimensions from '../Global/Dimensions';
import Colors from '../Global/Colors';
import {Card_chip} from '../assets/Images';

const CardView = props => {
  const {height, width} = Dimensions;

  return (
    <View>
      <View
        style={{
          height: height * 0.22,
          width: width * 0.86,
          backgroundColor: Colors.orange_Base,
          borderRadius: (width * 0.2) / 4,
          overflow: 'hidden',
          alignItems: 'center',
          zIndex: 4,
        }}>
        <View
          style={{
            top: -4,
            borderBottomColor: Colors.yellow_Base,
            borderLeftWidth: width * 1,
            borderRightWidth: width * 1,
            borderBottomWidth: width / 2,
            borderLeftColor: 'transparent',
            borderRightColor: Colors.yellow,
          }}>
          <Text style={{justifyContent: 'center', alignItems: 'center'}}>
            Hello
          </Text>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          zIndex: 9,
          right: 10,
          top: 20,
          borderWidth: 2,
          height: height * 0.02,
          width: width * 0.18,
          borderRadius: height * 0.004,
        }}
      />
      <Text
        style={{
          position: 'absolute',
          zIndex: 9,
          left: 20,
          bottom: 70,
          fontSize: 20,
          fontWeight: '500',
        }}>
        {props?.CardNumber ? props.CardNumber : '000 000 000 00'}
      </Text>

      <View
        style={{
          position: 'absolute',
          zIndex: 9,
          left: 20,
          bottom: 25,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: width * 0.77,
          alignItems: 'center',
        }}>
        <View>
          <Text style={{fontWeight: '500'}}>Card Holder Name</Text>
          <Text style={{fontWeight: '900', letterSpacing: 1.1}}>
            {props?.Name ? props.Name : 'Name'}
          </Text>
        </View>

        <View>
          <Text>Expiry Date</Text>
          <Text style={{fontWeight: '900', letterSpacing: 1.1}}>
            {props?.Expiry ? props.Expiry : 'MM/YY'}
          </Text>
        </View>
        <Image source={Card_chip} />
      </View>
    </View>
  );
};

export default CardView;
