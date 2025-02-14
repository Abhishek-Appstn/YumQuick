import {View, Text, FlatList} from 'react-native';
import React from 'react';
import PageHeader from './PageHeader';
import Layout from '../Screens/Layout';
import Colors from '../Global/Colors';
import ImageView from './ImageView';
import Dimensions from '../Global/Dimensions';

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
      <Layout>
        <View style={{alignItems: 'center', marginTop: 10}}>
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
            contentContainerStyle={{width: width * 0.84}}
            showsVerticalScrollIndicator={false}
            data={bigData}
            renderItem={({item, index}) => {
              return (
                <View>
                  <ImageView type="large" data={[{...item}]} />
                  <View style={{paddingVertical: 10}}>
                    <Text style={{fontWeight: '500', fontSize: 16}}>
                      {item.name}
                    </Text>
                    <Text style={{width: width * 0.4}}>{item.desc}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </Layout>
    </>
  );
};

export default BestSeller;
