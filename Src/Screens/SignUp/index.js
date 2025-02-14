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

const Signup = () => {
  const {height, width} = Dimensions;
  const styles = createStyles({height, width});
  const [name, setname] = useState('');
  const [mobileNumber, setmobileNumber] = useState(0);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [dateOfBirth, setdateOfBirth] = useState('');
  const [form, setForm] = useState({});

  const navigation = useNavigation();

  const Fields = [
    {name: 'Full Name', placeholder: 'Full Name', Id: 'name'},
    {name: 'Password', placeholder: 'Password', Id: 'password'},
    {name: 'Email', placeholder: 'Email', Id: 'email'},
    {name: 'Mobile Number', placeholder: 'Mobile Number', Id: 'mobile_number'},
    {name: 'Date of Birth', placeholder: 'DD / MM / YY', Id: 'dob'},
  ];
  const handleTextChange = (text, field) => {

    // setForm({
    //     ...form,
    //     field:text
    // })

    field === 'name'
      ? setname(text)
      : field === 'password'
      ? setpassword(text)
      : field === 'mobile_number'
      ? setmobileNumber(text)
      : field === 'email'
      ? setemail(text)
      : field === 'dob' ?? setdateOfBirth(text);
  }; 
  const handleNavigation = path => {
    navigation.navigate(path);
  };
  return (
<>
      <PageHeader Title="New Account" />
        <Layout>
          <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}style={{height:height*.8}}>

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
            Terms of Use{' '}
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
        <View style={{alignItems:'center',marginVertical:height*.008}}>

        <CustomButton
          title="Sign Up"
          onPress={() => handleNavigation('setPassword')}
        />
        <SignupIcons />
        <Text style={[styles.signupText,{marginVertical:0}]}>
          {' '}
          Already have an account?
          <Text
            style={styles.hyperlink}
            onPress={() => handleNavigation('Login')}>
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
      color:colors.Font,
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
      fontFamily:"LeagueSpartan-Light",
      width: width * 0.6,
      textAlign: 'center',
      fontSize: 12  ,
    },
    hyperlink: {
      color: colors.orange_Base,
      fontFamily:'LeagueSpartan-Medium',
      fontSize: 12,
    },
  });

export default Signup;
