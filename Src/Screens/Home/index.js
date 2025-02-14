import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  Image,
  Pressable,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../Global/Colors';
import SearchBar from '../../Common/SearchBar';
import Dimensions from '../../Global/Dimensions';
import DisplayCard from '../../Common/DisplayCard';
import Carousal from '../../Common/Carousal';
import {useNavigation} from '@react-navigation/native';
import {
  Filter,
  Mexican_Appetizer,
  Pork_Skewer,
  Star_Yellow_Filled,
} from '../../assets/Images';
import Layout from '../Layout';

const Home = () => {
  const {height, width} = Dimensions;
  const [Active, setActive] = useState(null);

  const styles = createStyle({height, width, Active});
  const data = [
    {id: '1', name: 'Snacks', image: require('../../assets/Images/Snacks.png')},
    {id: '2', name: 'Meal', image: require('../../assets/Images/Meals.png')},
    {id: '3', name: 'Vegan', image: require('../../assets/Images/Vegan.png')},
    {
      id: '4',
      name: 'Dessert',
      image: require('../../assets/Images/Desserts.png'),
    },
    {id: '5', name: 'Drinks', image: require('../../assets/Images/Drinks.png')},
  ];
  const SecData = [
    {
      name: 'Mexican Appetizer',
      rating: '5.0',
      price: 15.99,
      desc: 'Tortilla Chips With Toppins',
      image: Mexican_Appetizer,
    },
    {
      name: 'Pork Skewer',
      rating: '4.0',
      price: 13.99,
      desc: 'Marinated in a rich blend of herbs and spices, then grilled to perfection, served with a side of zesty dipping sauce.',
      image: Pork_Skewer,
    },
  ];
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{justifyContent: 'center'}}>
        <SearchBar />
        <View style={{padding: 20}}>
          <Text style={styles.headerText}>Good Morning</Text>
          <Text style={styles.subText}>
            Rise And Shine! It's Breakfast Time
          </Text>
        </View>
      </View>

      <View style={styles.innerContainer}>
       
          {/* <View style={{backgroundColor:colors.orange_Base}}> */}
        <View
          style={{
            borderBottomWidth: Active == null ? StyleSheet.hairlineWidth : 0,
            borderColor: colors.orange_Base,
            height: height * 0.15,
            alignItems: 'center',
            justifyContent:'space-between',
            paddingBottom: Active == null ? 10 : 0,
            alignSelf: 'center',

          }}>
          <FlatList
            data={data}
            horizontal={true}
            contentContainerStyle={{width:width*.9,justifyContent:'space-evenly'}}
            scrollEnabled={false}
            renderItem={({item, index}) => (
              <Pressable
                style={[
                  styles.flatlistContainer,
                  {backgroundColor: Active === index ? colors.White_1 : null},
                ]}
                onPress={() => {
                  Active == index ? setActive(null) : setActive(index);
                }}>
                {/* <View
                  style={{
                    backgroundColor: 'red',
                    zIndex: 3,
                    position: 'absolute',
                    bottom: 0,
                  }}
                /> */}

                <View style={styles.flatlistInnerContainer}>
                  <Image source={item.image} style={styles.flatlistImage} />
                </View>
                <Text style={{fontSize:12,fontFamily:'LeagueSpartan-Regular',color:colors.Font}}>{item.name}</Text>
              </Pressable>
            )}
          />
        </View>
        {Active == null ? (
          <ScrollView
            showsVerticalScrollIndicator={false} style={{paddingHorizontal:20}}
            >
            <DisplayCard title="Best Seller" more />
            <Carousal />
            <DisplayCard title="Recomended" type="large" />
          </ScrollView>
        ) : (
          <View style={{backgroundColor:colors.White_Bg}}>
            <View
              style={{
                height: height * 0.56,
                width: width * 0.85,
                alignSelf: 'center',
                marginVertical: 20,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text>
                  Sort By{' '}
                  <Text style={{color: colors.orange_Base, fontWeight: '800'}}>
                    Popular
                  </Text>
                </Text>
                <View
                  style={{
                    height: 30,
                    width: 30,
                    backgroundColor: colors.orange_Base,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={Filter} style={{height: height * 0.013}} />
                </View>
              </View>
              <FlatList
                data={SecData}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 50}}
                renderItem={({item, index}) => {
                  return (
                    <View
                      style={{
                        paddingVertical: 15,
                        borderColor: colors.orange_Base,
                        borderBottomWidth: 0.4,
                      }}>
                      <Image
                        style={{
                          height: height * 0.18,
                          width: width * 0.85,
                          borderRadius: (width * 0.2) / 3,
                          alignSelf: 'center',
                          resizeMode: 'cover',
                        }}
                        source={item.image}
                      />

                      <View>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              width: width * 0.55,
                            }}>
                            <Text
                              style={{
                                fontSize: 20,
                                fontWeight: '600',
                                marginVertical: 5,
                              }}>
                              {item.name}
                            </Text>

                            <View
                              style={{
                                backgroundColor: colors.orange_Base,
                                height: height * 0.009,
                                width: height * 0.009,
                                borderRadius: (height * 0.02) / 2,
                                marginHorizontal: 10,
                              }}
                            />

                            <View
                              style={{
                                backgroundColor: colors.orange_Base,

                                height: height * 0.025,
                                width: height * 0.06,
                                borderRadius: (height * 0.2) / 2,
                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                                flexDirection: 'row',
                                padding: 2,
                              }}>
                              <Text
                                style={{
                                  color: colors.White_1,
                                  fontWeight: '600',
                                }}>
                                {item.rating}
                              </Text>
                              <Image
                                source={Star_Yellow_Filled}
                                style={{
                                  height: height * 0.016,
                                  width: height * 0.016,
                                }}
                              />
                            </View>
                          </View>
                          <View style={{Width: width * 0.25}}>
                            <Text
                              style={{
                                fontSize: 18,
                                fontWeight: '600',
                                marginVertical: 5,
                                color: colors.orange_Base,
                              }}>
                              $ {item.price}
                            </Text>
                          </View>
                        </View>
                        <Text
                          style={{
                            fontSize: 13,
                            width: width * 0.65,
                            textAlign: 'justify',
                          }}>
                          {item.desc}
                        </Text>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        )}
      
      </View>

    </SafeAreaView>
  );
};

const createStyle = ({height, width, Active}) =>
  StyleSheet.create({
    container: {
      height: height * 0.26,
      width: width,
      backgroundColor: colors.yellow_Base,
    },
    innerContainer: {
      backgroundColor: Active !== null ? colors.orange_Base : colors.White_Bg,
      top: -5,
      height: width * 1.65,
      borderRadius: 27,
      paddingTop: 7,
      // paddingHorizontal:20
    },
    flatlistContainer: {
      alignItems: 'center',
      borderRadius: 23,
    },
    flatlistInnerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.yellow,
      width: width * 0.12,
      height: width * 0.16,
      borderRadius: (width * 0.16) / 2,
      marginVertical: 5,
      marginTop: 10,
    },
    flatlistImage: {
      width: width * 0.09,
      height: width * 0.09,
      resizeMode: 'contain',
    },
    headerText: {
      fontSize: 30,
      color: colors.White_1,
      fontFamily:'LeagueSpartan-Bold',
    },
    subText: {
      fontSize: 13,
      color: colors.orange_Base,
fontFamily:'LeagueSpartan-Medium'
    },
  });

export default Home;
