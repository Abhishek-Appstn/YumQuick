import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import PageHeader from '../../Common/PageHeader';
import colors from '../../Global/Colors';
import CustomTextInput from '../../Common/CustomTextInput';
import CustomButton from '../../Common/customButton';
import {useNavigation} from '@react-navigation/native';
import Dimensions from '../../Global/Dimensions';
import Layout from '../Layout';
import { FingerPrint, FingerPrint_Filled_big, FingerPrint_outline } from '../../assets/Images';

const SetFingerprint = () => {
  const {height, width} = Dimensions;
  const navigation = useNavigation();
  const styles = createstyles({height, width});
  const [Fingerprint, SetFingerprint] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      SetFingerprint(true);
    }, 5000);
  }, []);
  const handleNavigation = path => {
    navigation.navigate(path);
  };
  return (
    <>
      <PageHeader Title={'Set Your Fingerprint'} />
      <Layout>
      <View style={{marginTop:height*.05}} >
        <Text style={styles.subText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </Text>
        <View style={{alignItems:'center'}}>
        {Fingerprint ? (
          <Image  style={styles.imageStyle}source={FingerPrint_Filled_big} />
        ) : (
          <Image
            source={FingerPrint_outline}
          />
        )}
        <View style={styles.buttonView}>
          <CustomButton
          type="small-Xlong"
            title="Skip"
            buttonColor={colors.Orange_2}
            textColor={colors.orange_Base}
            onPress={() => {
              handleNavigation('Login');
            }}
          />
          <CustomButton            type="small-Xlong"
title="Continue" onPress={()=>handleNavigation('Drawer')}/>
        </View>
        </View>
      </View>
      </Layout>
    </>
  );
};
const createstyles = ({height, width}) =>
  StyleSheet.create({
    container: {
      top: -width * 0.05,
      borderRadius: width * 0.06,
      backgroundColor: colors.White_Bg,
      height: 600,
      padding: 20,
      alignItems: 'center',
    },
    subText: {
      fontSize: 14,
      color: colors.Font,
      fontFamily:'LeagueSpartan-Light',
      width: width * 0.8,
      // textAlign: 'justify',
      marginBottom: width * 0.1,
    },
    buttonView: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: width,
      marginVertical: width * 0.1,
    },
    imageStyle:{
      height:height*.45,resizeMode:'contain'
    }
  });

export default SetFingerprint;
