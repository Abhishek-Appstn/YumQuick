import {
  View,
  Text,
  FlatListComponent,
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import PageHeader from '../Common/PageHeader';
import Colors from '../Global/Colors';
import Dimensions from '../Global/Dimensions';
import CustomButton from '../Common/customButton';
import {ApplePay, Card, Checkmark, Checkmark_filled, Google_play, Home_Icon, Paypal} from '../assets/Images';
import { useNavigation } from '@react-navigation/native';

const PaymentMethod = () => {
  const {height, width} = Dimensions;
  const navigation=useNavigation()
  const styles = createStyles({height, width});
  const Data = [
    {Name: '**** **** **** 43', Icon: Card},
    {Name: 'Apple Pay', Icon: ApplePay},
    {Name: 'Pay Pal', Icon: Paypal},
    {Name: 'Google Pay', Icon: Google_play},


  ];
  const [Active, setActive] = useState(0);
  const HandlePress=(index)=>{
    setActive(index)
  }
  const handleNavigation=(path)=>{
    navigation.navigate(path)
  }
  return (
    <View>
      <PageHeader Title="Payment Methods" />
    <View style={styles.container}>
        <View>
          <FlatList
            data={Data}
            renderItem={({item, index}) => {
              return (
                <Pressable
                  style={{
                    flexDirection: 'row',
                    borderColor: Colors.Orange_3,
                    borderBottomWidth: 1,
                    alignSelf: 'center',
                    width: width * 0.83,
                    paddingVertical: 24,
                    alignItems: 'center',justifyContent:'space-between'
                  }} onPress={()=>{HandlePress(index)}}>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                  <Image source={item.Icon} />
                    <View style={{marginHorizontal:25}}>

                    <Text
                      style={{
                        fontWeight: '400',
                        fontSize: 20,
                        marginVertical: 2,
                      }}>
                      {item.Name}
                    </Text>
                    </View>
                    </View>
                
                    <Image
                      source={Active === index ? Checkmark_filled : Checkmark}
                    />
                  
                </Pressable>
              );
            }}
          />
          <View></View>
        </View>
        <View style={{marginVertical:height*.07}}>
        <CustomButton  StyleText={{fontSize:16.5}} title="Add New Card" type="small-long" buttonColor={Colors.Orange_3} textColor={Colors.orange_Base} onPress={()=>{handleNavigation('AddNewCard')}}/>
        </View>
      </View>
    </View>
  );
};
const createStyles = ({height, width}) =>
  StyleSheet.create({
    container: {
      top: -width * 0.05,
      borderRadius: width * 0.06,
      backgroundColor: Colors.White_Bg,
      height: height,
      padding: 15,
      paddingTop: 40,
    },
  });

export default PaymentMethod;
