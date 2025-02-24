import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import PageHeader from '../../Common/PageHeader';
import colors from '../../Global/Colors';
import CustomTextInput from '../../Common/CustomTextInput';
import CustomButton from '../../Common/customButton';
import SignupIcons from '../../Common/Signup Icons';
import Dimensions from '../../Global/Dimensions';
import Layout from '../Layout';
import {EmailValidation} from '../../Global/Validations/validations';
const Signup = () => {
  const {height, width} = Dimensions;
  const styles = createStyles({height, width});
  const [FormData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    mobile_number: '',
    dob: '',
  });

  const navigation = useNavigation();

  const Fields = [
    {name: 'Full Name', placeholder: 'Full Name', Id: 'name'},
    {name: 'Password', placeholder: 'Password', Id: 'password'},
    {name: 'Email', placeholder: 'Email', Id: 'email'},
    {name: 'Mobile Number', placeholder: 'Mobile Number', Id: 'mobile_number'},
    {name: 'Date of Birth', placeholder: 'DD / MM / YY', Id: 'dob'},
  ];
  const handleTextChange = (text, key) => {
    setFormData({
      ...FormData,
      [key]: text,
    });
  };
  const handleNavigation = path => {
    {
      FormData.name.trim() !== ''
        ? FormData.password.trim() !== ''
          ? FormData.email.trim() !== '' && EmailValidation(FormData.email)
            ? FormData.mobile_number.trim() !== ''
              ? FormData.dob.trim() !== ''
                ? navigation.navigate('setPassword')
// add new user creation code here

                : Alert.alert('DOB cannot be Null')
              : Alert.alert('Mobile number cannot be Null')
            : Alert.alert('Email cannot be null')
          : Alert.alert('Error', 'Password cant be empty')
        : Alert.alert('Error', 'Name Cannot be Empty');
    }
  };
  return (
    <>
      <PageHeader Title="New Account" />
      <Layout>
        <SafeAreaView>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{marginTop: height * 0.04}}>
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
            <Text style={styles.signupText}>
              By continuing, you agree to {'\n'}
              <Text
                style={styles.hyperlink}
                onPress={() => {
                  Alert.alert('');
                }}>
                Terms of Use
              </Text>
              {'and'}
              <Text
                style={styles.hyperlink}
                onPress={() => {
                  Alert.alert('');
                }}>
                {' '}
                Privacy Policy{' '}
              </Text>
              .
            </Text>
            <View
              style={{alignItems: 'center', marginVertical: height * 0.008}}>
              <CustomButton
                title="Sign Up"
                onPress={() => handleNavigation('setPassword')}
              />
              <SignupIcons />
              <Text style={[styles.signupText, {marginVertical: 0}]}>
                {' '}
                Already have an account?
                <Text
                  style={styles.hyperlink}
                  onPress={() => navigation.navigate('Login')}>
                  {' '}
                  Log in
                </Text>
              </Text>
            </View>
           
          </ScrollView>
        </SafeAreaView>
      </Layout>
    </>
  );
};

const createStyles = ({height, width}) =>
  StyleSheet.create({
    subHeaderText: {
      color: colors.Font,
      fontSize: 16,
      fontFamily: 'LeagueSpartan-Medium',
      marginVertical: width * 0.009,
    },
    subContainer: {
      marginVertical: width * 0.009,
    },
    signupText: {
      alignSelf: 'center',
      marginVertical: width * 0.02,
      marginTop: width * 0.04,
      fontFamily: 'LeagueSpartan-Light',
      width: width * 0.6,
      textAlign: 'center',
      fontSize: 12,
    },
    hyperlink: {
      color: colors.orange_Base,
      fontFamily: 'LeagueSpartan-Medium',
      fontSize: 12,
    },
  });

export default Signup;
