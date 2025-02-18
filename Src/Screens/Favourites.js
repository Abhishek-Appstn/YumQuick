import {View, Text, ScrollView, ImageBackground, Image, FlatList} from 'react-native';
import React from 'react';
import PageHeader from '../Common/PageHeader';
import Layout from './Layout';
import Colors from '../Global/Colors';
import Dimensions from '../Global/Dimensions';
import {
  Heart,
  HeartFilled_orange,
  Meals,
  Mexican_Appetizer,
} from '../assets/Images';

const Favourites = () => {
  const {height, width} = Dimensions;
  return (
    <View>
      <PageHeader Title="Favourites" />
      <Layout>
        <ScrollView style={{marginTop: height * 0.04, height: height}}>
          <Text
            style={{
              color: Colors.orange_Base,
              fontSize: 20,
              fontFamily: 'LeagueSpartan-Medium',
              alignSelf: 'center',
            }}>
            It's time to buy your favorite dish.
          </Text>
<FlatList contentContainerStyle={{marginTop:height*.03}} data={['','','']} numColumns={2} renderItem={({item,index})=>{
return(
<View>
          <View
            style={{
              width: width * 0.4,
              height: width * 0.4,marginRight:10,marginBottom:10,
              borderRadius: (width * 0.1) / 2,
              overflow: 'hidden',
               
            }}>
            <ImageBackground
              style={{width: width * 0.4, height: width * 0.4}}
              source={Mexican_Appetizer}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginHorizontal: width * 0.03,marginTop:width*.015
                }}>
                <View
                  style={{
                    padding: 5,
                    backgroundColor: Colors.White_1,
                    width: width * 0.07,
                    height: width * 0.07,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: (width * 0.2) / 3,
                  }}>
                  <Image source={Meals} />
                </View>
                <View
                  style={{
                    padding: 5,
                    backgroundColor: Colors.White_1,
                    width: width * 0.07,
                    height: width * 0.07,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: (width * 0.2) / 3,
                  }}>
                  <Image source={HeartFilled_orange} />
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{alignItems:'center',overflow:'hidden',marginBottom:10,marginTop:6}}>
          <Text style={{color:Colors.orange_Base,fontFamily:'LeagueSpartan-Medium',fontSize:16}}>Chicken Curry</Text>
          <Text style={{color:Colors.Font,fontFamily:'LeagueSpartan-Light',fontSize:12,textAlign:'center',width:width*.35}}>Lorem ipsum dolor sit amet, consectetur.</Text>

          </View>
            </View>
)
}}/>
        </ScrollView>
      </Layout>
    </View>
  );
};

export default Favourites;
