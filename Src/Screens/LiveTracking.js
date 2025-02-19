import {View, Text, Image, ScrollView, ImageBackground, VirtualizedList} from 'react-native';
import React, { useState } from 'react';
import PageHeader from '../Common/PageHeader';
import Layout from './Layout';
import {Call, DeliveryRider, Headphones, Heart, HeartFilled_orange, Map, Message, Star_Filled} from '../assets/Images';
import Dimensions from '../Global/Dimensions';
import Colors from '../Global/Colors';
import LinearGradient from 'react-native-linear-gradient';
import Slider from '@react-native-community/slider';

const LiveTracking = () => {
  const {height, width} = Dimensions;
  const [SliderValue, setSliderValue] = useState(50)
  const ImageOverlay=({title,icon})=>{
    return(
      <View style={{flexDirection:'row',marginTop:5,alignItems:'center'}}>
    <View style={{backgroundColor:Colors.orange_Base,right:-10,padding:4,height:width*.056,width:width*.49,borderRadius:width*.3/2,flexDirection:'row',alignItems:'center',overflow:'hidden',paddingLeft:10,}}>
    <Text style={{fontFamily:'LeagueSpartan-Medium',fontSize:14,color:Colors.White,width:width*.4}}>{title}</Text>
    </View>
    <View style={{backgroundColor:Colors.White_1,zIndex:9,left:-10,height:width*.1,borderRadius:width*.035,justifyContent:'center',alignItems:'center',padding:5,shadowRadius:100,shadowOpacity:1,}}>
    <Image style={{height:25,width:25}} resizeMode='contain' source={icon}
    />             </View>
    </View>
    )
  }
  return (
    <View>
      <PageHeader Title="Live Tracking" />
      <Layout>
        <ScrollView showsVerticalScrollIndicator={false}contentContainerStyle={{marginTop: height * 0.03,paddingBottom:200,}}>
          
          <View style={{borderRadius:30,overflow:'hidden',width:width*.85,}}>
            <ImageBackground source={Map} resizeMode="cover" style={{width:width*.85,height:height*.6,alignSelf:'center',overflow:'hidden'}}>
           <View style={{position:'absolute',bottom:20,right:0}}>
<ImageOverlay title={"Call the delivery boy"} icon={Call}/>
<ImageOverlay title={"Message the delivery boy"} icon={Message} />


             
           </View>
            </ImageBackground>
            </View>
          <View style={{marginTop: 25,overflow:'visible',justifyContent:'center'}}>
            <LinearGradient
              start={{x: 0, y: 1}}
              locations={[0.1, 0.3, 0.68, 1]}
              end={{x: 1, y: 0}}
              colors={[
                Colors.Gradient_Red,
                Colors.Gradient_Orange,
                Colors.Gradient_Green_Fluro,
                Colors.Gradient_Green_Light,
                Colors.Gradient_Green,
              ]}
              style={{
                height: height * 0.025,
                width: width * 0.81, 
                borderRadius: width
              }}>
              </LinearGradient>
              <Slider thumbImage={DeliveryRider} value={SliderValue} minimumValue={0} maximumValue={100}style={{position:'absolute',width:width*.83}}maximumTrackTintColor='transparent' minimumTrackTintColor='transparent' renderThumbComponent={<customSlider/>}/>

          </View>
          <View style={{marginTop: 10}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-Medium',
                  fontSize: 13,
                  color: Colors.orange_Base,
                }}>
                Delivery goes your way
              </Text>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-Medium',
                  fontSize: 13,
                  color: Colors.orange_Base,
                }}>
                Pick up your delivery
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-Medium',
                  fontSize: 13,
                  color: Colors.Font,
                }}>
                01 Sep 24
              </Text>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-Medium',
                  fontSize: 13,
                  color: Colors.Font,
                }}>
                01 Sep 24
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-Medium',
                  fontSize: 13,
                  color: Colors.Grey,
                }}>
                06:20 PM
              </Text>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-Medium',
                  fontSize: 13,
                  color: Colors.Grey,
                }}>
                07:20 PM
              </Text>
            </View>
          </View>
        </ScrollView>
      </Layout>
    </View>
  );
};

export default LiveTracking;
