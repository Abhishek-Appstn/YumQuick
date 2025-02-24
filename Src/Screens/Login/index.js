import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Alert,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../Global/Colors';
import PageHeader from '../../Common/PageHeader';
import CustomTextInput from '../../Common/CustomTextInput';
import CustomButton from '../../Common/customButton';
import {useNavigation} from '@react-navigation/native';
import SignupIcons from '../../Common/Signup Icons';
import Dimensions from '../../Global/Dimensions';
import Colors from '../../Global/Colors';
import {EmailValidation} from '../../Global/Validations/validations';
import auth, { getAuth, signInWithEmailAndPassword } from '@react-native-firebase/auth'

const Login = () => {
  const {height, width} = Dimensions;
  const styles = createStyles({height, width});
  const [FormData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loggedIn, setloggedIn] = useState(false); // replace using useselctor
  const navigation = useNavigation();

  const handleTextChange = (text, key) => {
    setFormData({
      ...FormData,
      [key]: text,
    });
  };

  const handleNavigation = path => {
    FormData.email.trim() && FormData.password.trim() !== ''
      ? EmailValidation(FormData.email.trim())
      
        ?LoginCall() 
        // navigation.navigate(path)
        : //Add code for firebase auth here
        
          Alert.alert('Error', 'Enter a valid mail id')
      : Alert.alert(
          'Enter all mandatory Fields',
          'Enter all mandatory fields to login ',
        );
  };
  const LoginCall=()=>{
    console.log("enterted")
    const auth=getAuth()
    signInWithEmailAndPassword(auth,FormData.email,FormData.password).then(response=>{
      console.log(response,'Signin SUccess')
    })
    .catch(error=>{
      console.log("===========================>",error)
    })
  }
  return (
    <>
      <PageHeader Title={loggedIn ? 'Hello !' : 'Log In'} />
      <View style={styles.container}>
        <View
          style={{
            marginHorizontal: width * 0.07,
            marginVertical: height * 0.02,
          }}>
          <Text style={styles.headerText}>Welcome</Text>
          {!loggedIn ? (
            <Text style={styles.subText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          ) : (
            <View style={{marginVertical: height * 0.015}}></View>
          )}
          <CustomTextInput
            name={'Email or Mobile Number'}
            backgroundColor={colors.yellow}
            width={width}
            height={width * 0.11}
            placeholder={'Email'}
            onChangeText={text => handleTextChange(text, 'email')}
          />
          <View style={{marginVertical: 10}} />
          <CustomTextInput
            name={'Password'}
            backgroundColor={colors.yellow}
            width={width}
            height={width * 0.11}
            placeholder={'Password'}
            type="password"
            onChangeText={text => handleTextChange(text, 'password')}
          />

          <Text style={styles.smallText}>Forget password</Text>
          <View style={styles.buttonContainer}>
            <View style={{alignItems: 'center', marginTop: height * 0.066}}>
              <CustomButton
                title="Log In"
                onPress={() => handleNavigation('Signup')}
              />
            </View>
            <View style={{marginVertical: height * 0.02}}>
              <SignupIcons loggedIn={loggedIn} />
              <View style={styles.signup}>
                <Text style={styles.signupText}>
                  Don't Have an Account?
                  <Text
                    style={styles.signupButton}
                    onPress={() => navigation.navigate('Signup')}>
                    {' '}
                    Sign Up
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const createStyles = ({height, width}) =>
  StyleSheet.create({
    container: {
      top: -width * 0.06,
      width: width,
      height: height * 0.83,
      borderTopLeftRadius: width * 0.088,
      borderTopRightRadius: width * 0.088,
      backgroundColor: Colors.White_Bg,
      paddingTop: 10,
      paddingBottom: 0,
    },
    headerText: {
      fontSize: 24,
      fontFamily: 'LeagueSpartan-SemiBold',
      marginVertical: width * 0.02,
    },
    subHeaderText: {
      fontSize: 17,
      fontWeight: '500',
      fontFamily: 'LeagueSpartan-Medium',
      marginBottom: width * 0.026,
      marginTop: width * 0.06,
    },
    subText: {
      fontSize: 12,
      color: colors.Black_Text,
      width: width * 0.82,
      textAlign: 'justify',
      marginBottom: width * 0.06,
    },
    smallText: {
      fontSize: 14,
      alignSelf: 'flex-end',
      fontFamily: 'LeagueSpartan-Medium',
      color: colors.orange_Base,
      marginRight: width * 0.02,
      marginTop: height * 0.016,
    },
    buttonContainer: {
      marginTop: width * 0.02,
    },

    signupView: {
      flexDirection: 'row',
    },

    signup: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: height * 0.02,
    },
    signupButton: {
      color: colors.orange_Base,
    },
    signupText: {
      fontSize: 13,
    },
  });

export default Login;
