import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import PageHeader from './PageHeader';
import Layout from '../Screens/Layout';
import Colors from '../Global/Colors';
import ImageView from './ImageView';
import Dimensions from '../Global/Dimensions';
import {Shopping_Cart, Shopping_Cart_White, Star_Yellow_Filled} from '../assets/Images';

const BestSeller = () => {
  const {height, width} = Dimensions;
  const bigData = [
    {
      name: 'Burger',
      image: require('../assets/Images/Burger.png'),
      desc: 'Lorem ipsum dolor sit amet, consectetur...',
      price: '103.0',
    },
    {
      name: 'Shawarma',
      image: require('../assets/Images/Shawarma.png'),
      desc: 'Lorem ipsum dolor sit amet, consectetur...',
      price: '50.0',
    },
    {
      name: 'Sandwich',
      image: require('../assets/Images/Sandwich.png'),
      desc: 'Lorem ipsum dolor sit amet, consectetur...',
      price: '12.99',
    },
    {
      name: 'CupCake',
      image: require('../assets/Images/cupcake.png'),
      desc: 'Lorem ipsum dolor sit amet, consectetur...',
      price: '8.2',
    },
  ];
  return (
    <>
      <PageHeader Title="Best Seller" />
     <View>
        <View style={{ marginTop: 10}}>
          <Text
            style={{
              color: Colors.orange_Base,
              fontSize: 18,
              fontWeight: '600',
              marginVertical: 10,
            }}>
            {' '}
            Discover our most popular dishes!
          </Text>

          <FlatList
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ 
            }}
            showsVerticalScrollIndicator={false}
            data={bigData}
            renderItem={({item, index}) => {
              return (
                <View>
                  <ImageView
                    type="large"
                    data={[{...item}]}
                    BestSeller={true}
                  />
                  <View style={{paddingVertical: 10,flexDirection:'row',width:width*.5}}>
                    <View>

                    <Text style={{fontWeight: '500', fontSize: 16}}>
                      {item.name}
                    </Text>
                      <Text style={{width: width * 0.4}}>{item.desc}</Text>
                      </View>
                    <View style={{}}>

                      <View
                        style={{
                          backgroundColor: Colors.orange_Base,
                          // height: height * 0.04,
                          // width: height * 0.04,
                          // borderRadius: (height * 0.03) / 2,
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection:'row',marginVertical:6
                        }}>
                          
                        <Text>5.00</Text>
                        <Image source={Star_Yellow_Filled}/>
                      </View>
                      <View
                        style={{
                          backgroundColor: Colors.orange_Base,
                          height: height * 0.03,
                          width: height * 0.03,
                          borderRadius: (height * 0.03) / 2,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image source={Shopping_Cart_White} />
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </>
  );
};

export default BestSeller;
