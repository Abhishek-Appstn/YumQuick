import {
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import PageHeader from '../Common/PageHeader';
import {useNavigation, useRoute} from '@react-navigation/native';
import Colors from '../Global/Colors';
import Dimensions from '../Global/Dimensions';
import {
  Cart,
  Cart_White,
  Checkmark,
  Checkmark_filled,
  Minus,
  Plus,
  Pork_Skewer,
} from '../assets/Images';
import CustomButton from '../Common/customButton';
import Svg, { Circle, Polygon } from 'react-native-svg';
import StarHex from '../Common/StarHex';

const ProductPage = (props) => {
  const route = useRoute();
  const data = route.params;
  const navigation=useNavigation()
  const {height, width} = Dimensions;
  const [count, setcount] = useState(0);
  const [addon, setaddon] = useState(null);

  const handlePress = action => {
    switch (action) {
      case 'inc':
        setcount(count + 1);
        break;
      case 'dec':
        count > 0 ? setcount(count - 1) : null;
    }
  };
  return (
    <>
      <PageHeader
        Type="ProductPage"
        Title={data.item.name}
        Rating={data.item.rating}
      />
     
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:100}}  
      style={{
          
          top: -width * 0.06,
          width: width,
          borderTopLeftRadius: width * 0.088,
          borderTopRightRadius: width * 0.088,
          backgroundColor:Colors.White_Bg,
          padding: 20,
          paddingBottom: 0,       
          alignSelf: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          {!props.OfferPercentage?
        <StarHex height={height*.05}style={{position:'absolute',zIndex:3,right:16,top:-8}}/>:null}
          <Image
            source={Pork_Skewer}
            style={{
              height: height * 0.25,
              width: width * 0.8,
              borderRadius: width * 0.08,
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              width: width * 0.8,

              borderColor: Colors.orange_Base,
              borderBottomWidth: 0.4,
              paddingVertical: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: width * 0.82,
                alignItems: 'center',
              }}>
                <View style={{flexDirection:'row',alignItems:'center'}}>

              <Text
                style={{
                  fontFamily:'LeagueSpartan-Bold',

                  color: Colors.orange_Base,
                  fontSize: 24,
                }}>
                $50.00
              </Text>
              {props.OfferPercentage?
              <Text
                style={{
        fontFamily:'LeagueSpartan-Bold',
                  color: Colors.yellow_Base,
                  fontSize: 15,
                  marginLeft:width*.02,
                  textDecorationLine:'line-through',
                  textDecorationColor:Colors.orange_Base,
                }}>
                $50.00
              </Text>:null}
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  width: width * 0.27,
                  alignItems: 'center',
                }}>
                <Pressable
                  style={{
                    height: height * 0.035,
                    width: height * 0.035,
                    borderRadius: height,
                    backgroundColor: Colors.orange_Base,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    handlePress('dec');
                  }}>
                  <Image source={Minus} />
                </Pressable>
                <Text style={{fontWeight: '500', fontSize: 23}}>{count}</Text>
                <Pressable
                  style={{
                    height: height * 0.035,
                    width: height * 0.035,
                    borderRadius: height,
                    backgroundColor: Colors.orange_Base,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    handlePress('inc');
                  }}>
                  <Image source={Plus} />
                </Pressable>
              </View>
            </View>
          </View>
          <View
            style={{
              alignSelf: 'flex-start',
              marginLeft: width * 0.05,
              paddingTop: 10,
            }}>
            <Text style={{fontSize: 22,fontWeight:'600'}}>Shrip</Text>
            <Text
              style={{fontSize: 11, width: width * 0.72, marginVertical: 10}}>
              Shrimp marinated in zesty lime juice, mixed with crisp onions,
              tomatoes, and cilantro
            </Text>
          </View>
          <View></View>
          <Text
            style={{
              fontSize: 22,
              alignSelf: 'flex-start',
              marginLeft: width * 0.05,
              fontWeight: '500',
              marginVertical: 10,
            }}>
            Add on ingredients
          </Text>
          <FlatList
            scrollEnabled={false}
            data={data?.item?.addon}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    width: width * 0.8,
                    marginVertical: 5,
                    justifyContent: 'space-between',
                  }}>
                  <Text>{item.name}</Text>
                  
                  <View
                    style={{
                      flexDirection: 'row',
                      width: width * 0.19,
                      justifyContent: 'space-evenly',
                      alignItems: 'center',
                    }}>
                    <Text style={{}}>${item.price}</Text>
                    <Pressable onPress={() => {addon==index?(setaddon(null),navigation.navigate("ConfirmOrder")):setaddon(index)}}>
                      {addon === index ? (
                        <Image source={Checkmark_filled} />
                      ) : (
                        <Image source={Checkmark} />
                      )}
                    </Pressable>
                  </View>
                </View>
              );
            }}
          />
          <CustomButton
            icon={Cart_White}
            title="Add to Cart"
            StyleText={{fontWeight: '500'}}
            onPress={()=>{navigation.navigate("Recomendations")}}
          />
        </View>

      </ScrollView>
    </>
  );
};

export default ProductPage;
