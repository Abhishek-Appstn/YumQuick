import {View, Text} from 'react-native';
import React, {useState} from 'react';
import PageHeader from '../Common/PageHeader';
import Dimensions from '../Global/Dimensions';
import Colors from '../Global/Colors';
import CustomTextInput from '../Common/CustomTextInput';
import CustomButton from '../Common/customButton';
import Layout from './Layout';

const ChangePassword = () => {
  const {height, width} = Dimensions;
  const [currentPassword, setcurrentPassword] = useState('');
  const [NewPassword, setNewPassword] = useState('');
  const [ConfirmNewPassword, setConfirmNewPassword] = useState('');
  const handleTextChange = (text, id) => {
    switch (id) {
      case 'CurrentPassword':
        setcurrentPassword(text);
        break;

      case 'NewPassword':
        setNewPassword(text);
        break;

      case 'ConfirmNewPassword':
        setConfirmNewPassword(text);
        break;

      default:
        break;
    }
  };
  return (
    <>
      <PageHeader Title="Password Setting" />
      {/* <View
        style={{
          top: -width * 0.05,
          borderRadius: width * 0.06,
          backgroundColor: Colors.White_Bg,
          height: height * 0.88,
          padding: 20,
          paddingTop: 50,
        }}> */}

        <Layout>
        <View
          style={{
            marginTop:height*.05
          }}>
         
          <CustomTextInput
            type="password"
            name="Current Password"
            width={width}
            buttonColor={Colors.orange_Base}
            onChangeText={text => handleTextChange(text, 'CurrentPassword')}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              marginVertical: 10,
              alignSelf: 'flex-end',
              color: Colors.orange_Base,
            }}>
            Forgot Password ?
          </Text>
        </View>
        <View
          style={{
         
          
            marginVertical: 7,
          }}>
          
          <CustomTextInput
            type="password"
            name="New Password"
            width={width}
            buttonColor={Colors.orange_Base}
            onChangeText={text => handleTextChange(text, 'NewPassword')}
          />
        </View>
        <View
          style={{
         
            marginVertical: 10,
          }}>
         
          <CustomTextInput
          name="   Confirm New Password"
            type="password"
            width={width}
            buttonColor={Colors.orange_Base}
            onChangeText={text => handleTextChange(text, 'ConfirmNewPassword')}
          />
        </View>
        <View style={{alignItems:'center',marginVertical:height*.12}}>
          <CustomButton
            StyleText={{fontWeight: '600'}}
            type="medium-long"
            title="Change Password"
          />
        </View>
        </Layout>
      {/* </View> */}
    </>
  );
};

export default ChangePassword;
