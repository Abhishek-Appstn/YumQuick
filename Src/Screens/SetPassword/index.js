import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import PageHeader from '../../Common/PageHeader';
import colors from '../../Global/Colors';
import CustomTextInput from '../../Common/CustomTextInput';
import CustomButton from '../../Common/customButton';
import Dimensions from '../../Global/Dimensions';
import { useNavigation } from '@react-navigation/native';
import Layout from '../Layout';

const SetPassword = () => {
  const {height, width} = Dimensions;
  const styles = createstyles({height, width});
  const [password, setpassword] = useState('');
  const [cpassword, setcpassword] = useState('');   
  const navigation=useNavigation(0)
  const handleNavigation = path => {
    navigation.navigate(path);
  };
  const Fields = [
    {name: 'Password', placeholder: 'Enter Password', Id: 'password'},
    {
      name: 'Confirm Password',
      placeholder: 'Confirm Password',
      Id: 'cpassword',
    },
  ];
  const handleTextChange = (text, field) => {
    field === 'password'
      ? setpassword(text)
      : field === 'cpassword' ?? setcpassword(text);
  };
  return (
    <>
      <PageHeader Title={'Set Password'} />
     <Layout>
      <View style={{}}>

        <Text style={styles.subText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        {Fields.map(item => (
          <View key={item.Id} style={styles.subContainer}>
            <CustomTextInput
            name={item.name}
              backgroundColor={colors.yellow}
              width={width}
              placeholder={item.placeholder}
              onChangeText={text => handleTextChange(text, item.Id)}
              type={item.Id}
            />
          </View>
        ))}
        <View style={{alignItems:'center',marginVertical:height*.05}}>

        <CustomButton type="medium-Xlong" title="Create New Password" onPress={()=>handleNavigation('setFingerprint')}/>
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
    },
    subText: {
      fontSize: 14,
      color: colors.Black_Text,
      width: width * 0.8,
      textAlign: 'justify',
      fontFamily:"LeagueSpartan-Light",
      marginBottom: height * 0.04,
    },
    subHeaderText: {
      fontSize: 16,
      fontWeight: '400',
      fontFamily: 'League Spartan',
      marginVertical: width * 0.009,
    },
    subContainer: {
      marginVertical: width * 0.035,
    },
  });

export default SetPassword;
