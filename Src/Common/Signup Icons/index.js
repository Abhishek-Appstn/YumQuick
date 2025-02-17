import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import colors from '../../Global/Colors';
import Dimensions from '../../Global/Dimensions';
import {Facebook, FingerPrint, Gmail} from '../../assets/Images';
const {height, width} = Dimensions;

const IconView = ({ImgSrc, type, loggedIn}) => {
  const styles = createStyles({height, width});

  return (
    <View
      style={[
        styles.iconContainer,
        type == 'login' ? styles.loggedInIconContainer : null,
      ]}>
      <Image
        source={ImgSrc}
        style={loggedIn ? styles.iconImage : {width: width * 0.05}}
        resizeMode="contain"
      />
    </View>
  );
};
const SignupIcons = ({loggedIn}) => {
  const styles = createStyles({height, width});

  return (
    <View style={styles.signupbar}>
      <Text style={styles.signupText}>
        {' '}
        {!loggedIn ? 'or Sign up with' : 'or'}
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        {!loggedIn ? (
          <>
            <IconView ImgSrc={Gmail} loggedIn={loggedIn} />
            <IconView ImgSrc={Facebook} loggedIn={loggedIn} />
            <IconView ImgSrc={FingerPrint} loggedIn={loggedIn} />
          </>
        ) : (
          <IconView type="login" ImgSrc={FingerPrint} loggedIn={loggedIn} />
        )}
      </View>
    </View>
  );
};

const createStyles = ({height, width}) =>
  StyleSheet.create({
    iconContainer: {
      height: width * 0.09,
      borderRadius: width / 2,
      backgroundColor: colors.Orange_2,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
      paddingHorizontal: height * 0.006,
    },
    loggedInIconContainer: {
      width: width * 0.13,
      height: height * 0.07,
      borderRadius: (height * 0.08) / 2,
      backgroundColor: colors.Orange_2,
      justifyContent: 'center',
      alignItems: 'center',
      padding: height * 0.023,
    },
    signupbar: {
      alignSelf: 'center',
      marginTop: width * 0.02,
    },
    signupText: {
      alignSelf: 'center',
      fontSize: 12,
      fontFamily: 'LeagueSpartan-Light',
    },
    iconImage: {
      width: width * 0.08,
      height: height * 0.08,
      resizeMode: 'contain',
    },
  });

export default SignupIcons;
