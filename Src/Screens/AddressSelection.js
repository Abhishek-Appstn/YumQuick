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
import {Checkmark, Checkmark_filled, Home_Icon} from '../assets/Images';
import { useNavigation } from '@react-navigation/native';

const AddressSelection = () => {
  const {height, width} = Dimensions;
  const navigation=useNavigation()
  const styles = createStyles({height, width});
  const Data = [
    {nickName: 'My Office', Address: '778 Locust View Drive Oakland, CA'},
    {nickName: 'My Home', Address: '778 Locust View Drive Oakland, CA'},
    {nickName: "Parent's House", Address: '778 Locust View Drive Oakland, CA'},
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
      <PageHeader Title="Delivery Address" />
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
                    borderTopWidth: 1,
                    alignSelf: 'center',
                    width: width * 0.83,
                    paddingVertical: 20,
                    alignItems: 'center',
                  }} onPress={()=>{HandlePress(index)}}>
                  <Image source={Home_Icon} />
                  <View style={{marginHorizontal: width * 0.089}}>
                    <Text
                      style={{
                        fontWeight: '600',
                        fontSize: 20,
                        marginVertical: 2,
                      }}>
                      {item.nickName}
                    </Text>
                    <Text style={{fontSize: 12, fontWeight: '300'}}>
                      {item.Address}
                    </Text>
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
        <View style={{marginVertical:height*.18}}>
        <CustomButton  StyleText={{fontSize:16.5}} title="Add New Address" type="small-long" buttonColor={Colors.Orange_3} textColor={Colors.orange_Base} onPress={()=>{handleNavigation('AddAddress')}}/>
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

export default AddressSelection;
