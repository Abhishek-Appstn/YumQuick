import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Alert,
  Image,
} from 'react-native';
import React from 'react';
import colors from '../../Global/Colors';
import {useNavigation} from '@react-navigation/native';
import Dimensions from '../../Global/Dimensions';
const {height, width} = Dimensions;
const CustomButton = props => {
  const styles = createStyles(props);
  return (
    <Pressable style={styles.ButtonStyle} onPress={props.onPress}>
      {props?.icon ? <Image source={props.icon} /> : null}
      <Text
        style={[
          {
            color: props?.textColor ? props.textColor : colors.White_1,
            fontSize:
              props.type == 'small'
                ? 18
                : props.type === 'tiny'
                ? 15
                : props.type === 'small-long'
                ? 17
                : props.type === 'tiny-long'
                ? 14
                : props.type === 'small-Xlong'
                ? 17
                : props.type === 'medium-long'
                ? 19
                : props.type === 'tiny-Xlong'
                ? 11.5
                : props.type === 'medium-small'
                ? 21
                : props.type === 'medium-Xsmall'
                ? 18
                : props.type === 'medium-Xlong'
                ? 18
                : 24,
            fontFamily: 'LeagueSpartan-Regukar',
        
          },
          props?.StyleText,
        ]}>
        {props.title}
      </Text>
    </Pressable>
  );
};
const getButtonDimensions = type => {
  switch (type) {
    case 'large':
      return {buttonHeight: width * 0.1, buttonWidth: width * 0.7};
    case 'medium':
      return {buttonHeight: width * 0.1, buttonWidth: width * 0.45};
    case 'medium-small':
      return {buttonHeight: width * 0.1, buttonWidth: width * 0.4};
    case 'medium-Xsmall':
      return {buttonHeight: width * 0.09, buttonWidth: width * 0.38};
    case 'medium-long':
      return {buttonHeight: width * 0.1, buttonWidth: width * 0.5};
    case 'medium-Xlong':
      return {buttonHeight: width * 0.1, buttonWidth: width * 0.5};
    case 'small':
      return {buttonHeight: width * 0.08, buttonWidth: width * 0.27};
    case 'small-long':
      return {buttonHeight: width * 0.08, buttonWidth: width * 0.38};
    case 'small-Xlong':
      return {buttonHeight: width * 0.08, buttonWidth: width * 0.4};
    case 'tiny':
      return {buttonHeight: width * 0.065, buttonWidth: width * 0.29};
    case 'tiny-long':
      return {buttonHeight: width * 0.08, buttonWidth: width * 0.26};
    case 'tiny-Xlong':
      return {buttonHeight: width * 0.053, buttonWidth: width * 0.235};
    default:
      return {buttonHeight: width * 0.11, buttonWidth: width * 0.5};
  }
};
const createStyles = props => {
  const {buttonHeight, buttonWidth} = getButtonDimensions(props.type);

  return StyleSheet.create({
    ButtonStyle: {
      backgroundColor: props?.buttonColor
        ? props.buttonColor
        : colors.orange_Base,
      width: buttonWidth,
      height: buttonHeight,
      borderRadius: buttonWidth / 2,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginHorizontal: props.margin ? props.margin : 0,
      flexDirection: 'row',
    },
  });
};
export default CustomButton;
