import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import PageHeader from '../Common/PageHeader';
import Colors from '../Global/Colors';
import Dimensions from '../Global/Dimensions';
import {
    Arrow_Right,
    Brownie,
    Coffee,
  DeliveryRider,
  Payments,
  Pizza,
  Rider,
  TransferDocument,
  TransferDocument_orange,
} from '../assets/Images';
import CustomButton from '../Common/customButton';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
  const {height, width} = Dimensions;
  const [Active, setActive] = useState(0);
  const navigation=useNavigation()
const data=[
    {id:0,title:'Order For Food',Desc:'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',imagebg:Pizza,icon:TransferDocument_orange},
    {id:1,title:'Easy Payment',Desc:'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',imagebg:Brownie,icon:Payments},
    {id:2,title:'Fast Delivery',Desc:'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',imagebg:Coffee,icon:Rider},
]
const count=data.length
console.log(data[Active].imagebg)
  return (
    <View style={{backgroundColor: Colors.yellow_Base, height: height}}>
      <SafeAreaView style={{height: height, width: width}}>
        <ImageBackground
          style={{height: height, width: width, justifyContent: 'flex-end'}}
          source={data[Active].imagebg}>
           {Active!==count-1?   <Pressable style={{flexDirection:'row',position:'absolute',right:4,top:10,justifyContent:'center',alignItems:'center'}} onPress={()=>{navigation.navigate("Login")}}>
          <Text style={{alignSelf:'flex-end',color:Colors.orange_Base,fontWeight:'600'}}>Skip</Text>
<Image source={Arrow_Right} style={{marginHorizontal:8}}/>
            </Pressable>:null}

          <View
            style={{
              backgroundColor: Colors.White_Bg,
              height: height * 0.45,
              borderRadius: 25,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: width * 0.7,
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: 20,
                height: height * 0.31,
                
              }}>
              <View
                style={{
                  height: height * 0.17,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Image
                  source={data[Active].icon}
                  resizeMode="contain"
                  style={{width: width * 0.4,height:height*.045}}
                />
                <Text
                  style={{
                    fontFamily: 'LeagueSpartan-Bold',
                    fontSize: 24,
                    color: Colors.orange_Base,
                  }}>
{data[Active].title}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'LeagueSpartan-Medium',
                    fontSize: 14,
                  }}>
{data[Active].Desc}
                  
                </Text>
              </View>
              <FlatList
                scrollEnabled={false}
                data={['', '', '']}
                contentContainerStyle={{
                  marginTop: 50,
                  height: height * 0.04,
                }}
                horizontal
                renderItem={({item, index}) => {
                  return (
                    <Pressable
                      style={{
                        height: width * 0.01,
                        width: width * 0.06,
                        borderRadius: 29,
                        backgroundColor:
                          Active === index
                            ? Colors.orange_Base
                            : Colors.Orange_3,
                        marginHorizontal: 3,
                      }}
                      onPress={() => {
                        setActive(index);
                      }}
                    />
                  );
                }}
              />
              <CustomButton type="small" title={Active===count-1?'Get Started':"Next"} onPress={()=>{Active<count-1?setActive(Active+1):navigation.navigate("Login")}} />
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
};

export default OnboardingScreen;
