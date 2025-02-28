import {View, Text, SafeAreaView, Image, Pressable} from 'react-native';
import React from 'react';
import Dimensions from '../Global/Dimensions';
import Colors from '../Global/Colors';
import {Bell, Plus, Share_icon, UserDp} from '../assets/Images';
import {BarChart, LineChart, RadarChart} from 'react-native-gifted-charts'
import { useNavigation } from '@react-navigation/native';

const Admin_Home = () => {
  const {height, width} = Dimensions;
  const navigation=useNavigation()
  return (
    <SafeAreaView
      style={{height: height, width: width, backgroundColor: Colors.White_Bg}}>
      <View style={{margin: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              height: width * 0.2,
              width: width * 0.2,
              borderRadius: width,
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#eee',
            }}>
            <Image
              style={{height: width * 0.1, width: width * 0.1}}
              source={Share_icon}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              height: width * 0.2,
              width: width * 0.2,
              borderRadius: width,
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{height: width * 0.2, width: width * 0.2}}
              source={UserDp}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
                <Text>Hey John</Text>
                <Text style={{fontSize:25,fontWeight:'600'}}>Your Dashboard</Text>

            </View>
            <View
            style={{
              height: width * 0.2,
              width: width * 0.2,
              borderRadius: width,
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{height: width * 0.1, width: width * 0.1}}
              source={Bell}
              resizeMode="contain"
            />
          </View>
</View>
<View style={{height:height*.17,marginBottom:10,backgroundColor:Colors.yellow_Base,borderRadius:20,padding:15,elevation:20}}>
    <Text style={{fontSize:45,fontWeight:'900'}}>500</Text>
    <Text>Orders's Today</Text>
</View>
<Text style={{fontSize:20,fontWeight:'700',marginBottom:20}}> Recent Order Statistics</Text>
<LineChart xAxisLabelTexts={''} height={170} width={width*.7}barWidth={16}barBorderRadius={6}color={Colors.orange_Base}  data={[{value:50},{value:10},{value:40},{value:50}]}/>
     
     <View style={{flexDirection:'row',width:width*.9,justifyContent:'space-between',alignItems:'center',marginHorizontal:10}}>
        <Pressable style={{height:height*.2,width:width*.4,backgroundColor:Colors.yellow_Base,borderRadius:20,alignItems:'center',justifyContent:'space-evenly',elevation:20}}onPress={()=>navigation.navigate('AddProduct')}>
         <Image source={Plus} style={{height:50,width:50}}/>
            <Text>Add Product</Text>
        </Pressable>

        <Pressable style={{height:height*.2,width:width*.4,backgroundColor:Colors.yellow_Base,borderRadius:20,alignItems:'center',justifyContent:'space-evenly',elevation:20}}>
         <Image source={Plus} style={{height:50,width:50}}/>
            <Text>Add New Category </Text>
        </Pressable>
     </View>
      </View>
    </SafeAreaView>

  );
};

export default Admin_Home;
