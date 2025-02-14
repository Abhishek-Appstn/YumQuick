import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  Animated,
  Easing,
  Pressable,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Dimensions from '../Global/Dimensions';
import Colors from '../Global/Colors';
import {
  Cart,
  Contact,
  Help,
  Location,
  Logout,
  Payments,
  Profile,
  Settings,
} from '../assets/Images';
import {useDrawerStatus} from '@react-navigation/drawer';
import ActionSheet from 'react-native-actions-sheet';
import CustomButton from '../Common/customButton';
import { useNavigation } from '@react-navigation/native';

const {height, width} = Dimensions;
const createStyles = ({height, width}) =>
  StyleSheet.create({
    container: {
      height: height,
      backgroundColor: Colors.orange_Base,
      paddingTop: width * 0.17,
    },
    profileView: {
      height: height * 0.1,
      alignItems: 'center',
      flexDirection: 'row',
      alignSelf: 'center',
      paddingRight: 6,
    },
    dpView: {
      height: height * 0.09,
      width: height * 0.09,
      borderRadius: height,
      overflow: 'hidden',
    },
    image: {
      height: width * 0.16,
      width: width * 0.16,
    },
    name: {
      fontSize: 33,
      fontWeight: 'bold',
      color: Colors.White_1,
    },
    email: {
      color: Colors.yellow,
      fontSize: 16,
      fontWeight: '500',
    },
  });

const styles = createStyles({height, width});
const Data = [
  {name: 'My Orders', icon: Cart},
  {name: 'My Profile', icon: Profile},
  {name: 'Delivery Address', icon: Location},
  {name: 'Payment Methods', icon: Payments},
  {name: 'Contact Us', icon: Contact},
  {name: 'Help & FAQs', icon: Help},
  {name: 'Settings', icon: Settings},
];
const ProfileView = props => {
  return (
    <View style={styles.profileView}>
      <View style={styles.dpView}>
        <Image
          source={require('../assets/Images/Dp.png')}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.name}>John Doe {props.Name}</Text>
        <Text style={styles.email}>Loremipsum@gmail.com{props.email}</Text>
      </View>
    </View>
  );
};
const LogoutButton = () => {
  const ActionsheetRef = useRef();
const navigation=useNavigation()
const handlePress=(path)=>{
  ActionsheetRef.current.hide(),
  navigation.navigate(path)
}
  return (
    <>
      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 5,
          width: width * 0.63,
          alignSelf: 'center',
          paddingVertical: 26,
        }}
        onPress={() => {
          ActionsheetRef.current.show();
        }}>
        <View
          style={{
            backgroundColor: Colors.White_1,
            padding: 10,
            height: width * 0.09,
            width: width * 0.09,
            borderRadius: width * 0.08,
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={Logout} resizeMode="contain" />
        </View>
        <Text
          style={{
            marginHorizontal: width * 0.085,
            color: Colors.yellow,
            fontSize: 20,
            fontWeight: '500',
          }}>
          Log Out
        </Text>
      </Pressable>

      <ActionSheet
        ref={ActionsheetRef}
        containerStyle={{
          height: height * 0.3,
          backgroundColor: Colors.White_Bg,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <Text
            style={{
              fontSize: 20,
              width: width * 0.55,
              textAlign: 'center',
              fontWeight: '600',alignSelf:'center'
            }}>
            Are you sure you want to log out ?
          </Text>
        </View>
        <View style={{flexDirection:'row',marginVertical:25}}>
          <CustomButton type='medium' margin={5} buttonColor={Colors.Orange_2} title="Cancel"textColor={Colors.orange_Base} StyleText={{fontWeight:'600'}} onPress={()=>handlePress('Review')}/>
          <CustomButton type='medium' margin={5} title="Yes, Logout" StyleText={{fontWeight:'600'}} onPress={()=>handlePress('Confirmation')}/>

        </View>
      </ActionSheet>
    </>
  );
};
const ItemView = props => {
  return (
    <View style={{paddingTop: 15}}>
      <FlatList
        data={Data}
        renderItem={({item, index}) => {
          return (
            <Pressable
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 5,
                borderBottomColor: Colors.Orange_3,
                borderBottomWidth: 0.8,
                width: width * 0.7,
                alignSelf: 'center',
                paddingVertical: 10,
              }}>
              <View
                style={{
                  backgroundColor: Colors.White_1,
                  padding: 10,
                  height: width * 0.12,
                  width: width * 0.12,
                  borderRadius: width * 0.047,
                  overflow: 'hidden',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image source={item.icon} resizeMode="contain" />
              </View>
              <Text
                style={{
                  marginHorizontal: width * 0.088,
                  color: Colors.yellow,
                  fontSize: 20,
                  fontWeight: '600',
                }}>
                {item.name}
              </Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

const CustomDrawer = (route) => {

  const drawerStatus = useDrawerStatus();
  const translateX = useState(new Animated.Value(0))[0];
  const [drawerContent, setdrawerContent] = useState('')
  useEffect(() => {
    if (drawerStatus === 'open') {
      Animated.spring(translateX, {
        toValue: 0,
        bounciness: 10,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(translateX, {
        toValue: 500,
        duration: 50000,
        easing: Easing.inOut(Easing.linear),
        useNativeDriver: true,
      }).start();
    }
  }, [drawerStatus]);

  return (
    <View style={styles.container}>
        {drawerContent!=='Notifications'?
      <Animated.View style={{transform: [{translateX}]}}>
        <ProfileView />
        <ItemView />
        <LogoutButton />
      </Animated.View>
      :<Animated.View style={{transform: [{translateX}]}}>
    
    </Animated.View>}
    </View>
  );
};

export default CustomDrawer;
