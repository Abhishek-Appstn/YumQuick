import {View, Text, Image} from 'react-native';
import React from 'react';
import PageHeader from '../Common/PageHeader';
import Layout from './Layout';
import {Map} from '../assets/Images';
import Dimensions from '../Global/Dimensions';
import Colors from '../Global/Colors';
import LinearGradient from 'react-native-linear-gradient';

const LiveTracking = () => {
  const {height, width} = Dimensions;
  return (
    <View>
      <PageHeader Title="Live Tracking" />
      <Layout>
        <View style={{marginTop: height * 0.05}}>
          <Image source={Map} resizeMode="contain" />
          <View style={{marginTop: 10}}>
            <LinearGradient
              start={{x: 0, y: 1}}
              locations={[0.1, 0.3, 0.68, 1]}
              end={{x: 1, y: 0}}
              colors={[
                Colors.Gradient_Red,
                Colors.Gradient_Orange,
                Colors.Gradient_Green_Fluro,
                Colors.Gradient_Green_Light,
                Colors.Gradient_Green,
              ]}
              style={{
                height: height * 0.025,
                width: width * 0.82,
                borderRadius: width,
                elevation: 10,
              }}></LinearGradient>
          </View>
          <View style={{marginTop: 10}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-Medium',
                  fontSize: 13,
                  color: Colors.orange_Base,
                }}>
                Delivery goes your way
              </Text>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-Medium',
                  fontSize: 13,
                  color: Colors.orange_Base,
                }}>
                Pick up your delivery
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-Medium',
                  fontSize: 13,
                  color: Colors.Font,
                }}>
                01 Sep 24
              </Text>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-Medium',
                  fontSize: 13,
                  color: Colors.Font,
                }}>
                01 Sep 24
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-Medium',
                  fontSize: 13,
                  color: Colors.Grey,
                }}>
                06:20 PM
              </Text>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-Medium',
                  fontSize: 13,
                  color: Colors.Grey,
                }}>
                07:20 PM
              </Text>
            </View>
          </View>
        </View>
      </Layout>
    </View>
  );
};

export default LiveTracking;
