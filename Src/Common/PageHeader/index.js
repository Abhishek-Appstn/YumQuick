import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import colors from '../../Global/Colors';
import {useNavigation} from '@react-navigation/native';
import Dimensions from '../../Global/Dimensions';
import Colors from '../../Global/Colors';
import {
  Back,
  Heart_filled_white,
  Star_Yellow_Filled,
} from '../../assets/Images';

const PageHeader = props => {
  const {height, width} = Dimensions;
  const styles = createStyles({height, width});
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[styles.container, {justifyContent: 'flex-start'}]}>
      {props.Type !== 'ProductPage' ? (
        <View
          style={{
            justifyContent: 'center',
            width: width * 0.84,
            alignSelf: 'center',
            marginTop: height*.04,
          }}>
            <View>

          <View style={{flexDirection: 'row', alignItems: 'center',justifyContent:'space-between'}}>
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                source={Back}
                style={{
                  height: width * 0.03,
                  resizeMode: 'cover',
                }}
              />
            </Pressable>
            <Text style={styles.text}>{props.Title}</Text>
            <View></View>
          </View>
          </View>
          <Text style={styles.Subtext}>{props.subTitle}</Text>
        
        </View>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            width: width * 0.94,
            justifyContent: 'space-between',
            paddingVertical: 50,
          }}>
          <View style={{}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 26,
              }}>
              <Pressable onPress={() => navigation.goBack()}>
                <Image
                  source={Back}
                  style={{
                    height: 15,
                    width: 15,
                    resizeMode: 'contain',
                  }}
                />
              </Pressable>
              <View style={{marginLeft: 20}}>
                <Text
                  style={[
                    styles.text,
                    {marginHorizontal: 0, color: colors.Black_Text},
                  ]}>
                  {props.Title}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: colors.orange_Base,
                  height: height * 0.009,
                  width: height * 0.009,
                  borderRadius: (height * 0.02) / 2,
                  marginLeft: width * 0.07,
                }}
              />
            </View>
            <View
              style={{
                backgroundColor: Colors.orange_Base,
                height: height * 0.025,
                width: height * 0.06,
                borderRadius: (height * 0.2) / 2,
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                padding: 2,
                alignSelf: 'center',
                marginVertical: 4,
              }}>
              <Text
                style={{
                  color: Colors.White_1,
                  fontWeight: '600',
                }}>
                {props.Rating}
              </Text>
              <Image
                source={Star_Yellow_Filled}
                style={{
                  height: height * 0.016,
                  width: height * 0.016,
                }}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: Colors.orange_Base,
              height: height * 0.04,
              width: height * 0.04,
              borderRadius: (height * 0.2) / 2,
              alignItems: 'center',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              padding: 2,
              alignSelf: 'center',
              marginVertical: 4,
            }}>
            <Image
              source={Heart_filled_white}
              style={{
                height: height * 0.017,
                width: height * 0.017,
                resizeMode: 'contain',
              }}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
const createStyles = ({height, width}) =>
  StyleSheet.create({
    container: {
      height: height * 0.2,
      width: width,
      backgroundColor: colors.yellow_Base,
      justifyContent: 'center',
    },
    icon: {
      color: colors.Red_icon,
    },
    text: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontFamily: 'LeagueSpartan-Bold',
      color: colors.White_1,
      fontSize: 25,
    },
    Subtext: {
      textAlign: 'center',
      fontFamily: 'LeagueSpartan-Bold',
      color: colors.orange_Base,
      fontSize: 16,
      fontWeight: '500',
    },
  });

export default PageHeader;
