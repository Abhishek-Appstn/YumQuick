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
  Animated,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import colors from '../../Global/Colors';
import SearchBar from '../../Common/SearchBar';
import Dimensions from '../../Global/Dimensions';
import DisplayCard from '../../Common/DisplayCard';
import Carousal from '../../Common/Carousal';
import {useNavigation, useRoute} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {
  Filter,
  Mexican_Appetizer,
  Pork_Skewer,
  Star_Yellow_Filled,
} from '../../assets/Images';
import Layout from '../Layout';
import Svg, {Path} from 'react-native-svg';
import Colors from '../../Global/Colors';
import { collection, getDocs, getFirestore, query, where } from '@react-native-firebase/firestore';
import FetchFirestoreData from '../../Global/FirestoreFetch';


const Home = () => {
  const Aroute = useRoute();
  const A = Aroute.params;
  const {height, width} = Dimensions;
  const [Active, setActive] = useState(null);
  const RippleBG = useRef(new Animated.Value(0)).current;
  const styles = createStyle({height, width, Active});
const [Data, setData] = useState([]) 
const [FData, setFData] = useState([]) 
  // useEffect(() => {
  //   const fetchData = async (Name) => {
  //     const firestoreData = await FetchFirestoreData({ CollectionName: Name ,QueryFilters:[where("Type",'==','Snacks')]});
  //     setData(firestoreData);
  //   };
  //   fetchData("Products")
  //  }, [])

useEffect(() => {
  const fetchData = async (Name) => {
    console.log('Fetching data with filter...');
    const filters = [where("Type", "==", "Vegan")];
    console.log('Filters:', filters);

 try {
  console.log("ENtering Try block")
      const firestoreData = await FetchFirestoreData({ CollectionName: Name });
      console.log('Firestore Data:', firestoreData); // Log the result
      setData(firestoreData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  
  };
  fetchData("Products");
}, []);


  //  useEffect(() => {
  //   const fetchData = async ({Name}) => {
  //      const Filter=where("Type",'==','Snacks')
  //   const FetchedData=await FetchFirestoreData({CollectionName:Name,QueryFilters:Filter})
  //     // const firestoreData = await FetchFirestoreData({ CollectionName: Name });
  //     setFData(FetchedData);
  //   };
  //   fetchData("Products")
  //  }, [])
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
  useEffect(() => {
    A == true ? setActive(true) : null;
  }, [A]);
  const Length = data.length;
  const navigation = useNavigation();
  const StartRipple = () => {
    RippleBG.setValue(0);
    Animated.timing(RippleBG, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{justifyContent: 'center'}}>
        <View style={{paddingTop: height * 0.02}}>
          <SearchBar />
        </View>

        <View style={{padding: 20}}>
          {Active == null ? (
            <>
              <Text style={styles.headerText}>Good Morning</Text>
              <Text style={styles.subText}>
                Rise And Shine! It's Breakfast Time
              </Text>
            </>
          ) : null}
        </View>
      </View>

      <View style={styles.innerContainer}>
        <ScrollView
          contentContainerStyle={{backgroundColor:Active!==null?Colors.orange_Base:Colors.White_Bg}}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              borderBottomWidth: Active == null ? StyleSheet.hairlineWidth : 0,
              borderColor: colors.orange_Base,
              height: width * 0.255,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <FlatList
              data={data}
              key={data.id}
              horizontal={true}
              scrollEnabled={false}
              contentContainerStyle={{
                width: width,
                paddingLeft: 15,paddingTop:5,
                backgroundColor:Active!==null?Colors.orange_Base:Colors.White_Bg
              }}
              renderItem={({item, index}) => (
                <>
                  <Pressable
                    style={[styles.flatlistContainer, {marginHorizontal: 13}]}
                    onPress={() => {
                      Active == index ? setActive(null) : setActive(index);
                    }}>
                    {Active === index ? (
                      <Svg
                        width={123}
                        height={98}
                        viewBox="0 0 123 93"
                        style={{position: 'absolute', zIndex: -1}}
                        fill="none">
                        <Path
                          d="M96.1636 26.8269C96.1636 12.0108 84.1486 0 69.3272 0H53.6726C38.8513 0 26.8363 12.0108 26.8363 26.8269V66.1731C26.8363 80.9892 14.8213 93 0 93H123C108.179 93 96.1636 80.9892 96.1636 66.1731V26.8269Z"
                          fill="#F5F5F5"
                        />
                      </Svg>
                    ) : null}
                    <View
                      style={[
                        styles.flatlistInnerContainer,
                        {
                          backgroundColor:
                            Active === index
                              ? Colors.yellow_Base
                              : Colors.yellow,
                          zIndex: 88,
                        },
                      ]}>
                      <Image source={item.image} style={styles.flatlistImage} />
                    </View>
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: 'LeagueSpartan-Regular',
                        color: colors.Font,
                      }}>
                      {item.name}
                    </Text>
                  </Pressable>
                </>
              )}
            />
          </View>
          {Active == null ? (
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{paddingHorizontal: 20}}
              contentContainerStyle={{marginTop: 10,paddingBottom:80}}>
              <DisplayCard title="Best Seller" more Data={Data} />
              <Carousal />
              <DisplayCard title="Recomended" type="large" />
            </ScrollView>
          ) : (
            <View
              style={{
                borderTopLeftRadius: Active == 0 ? 0 : 20,
                borderTopRightRadius: Active + 1 == Length ? 0 : 20,
                backgroundColor:Colors.White_Bg
              }}>
              <View
                style={{
               
                  width: width * 0.9,
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
                  <Text
                    style={{fontFamily: 'LeagueSpartan-Light', fontSize: 12}}>
                    Sort By{' '}
                    <Text style={{color: colors.orange_Base}}>Popular</Text>
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
                  key={SecData.name}
                  scrollEnabled={false}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{}}
                  renderItem={({item, index}) => {
                    return (
                      <Pressable
                        style={{
                          paddingVertical: 15,
                          borderColor: colors.orange_Base,
                          borderBottomWidth: 0.4,
                          justifyContent: 'center',
                        }}
                        onPress={() => {
                          navigation.navigate('ProductPage', {item});
                        }}>
                        <Image
                          style={{
                            height: height * 0.25,
                            width: width * 0.89,
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
                                marginTop: 10,
                              }}>
                              <Text
                                style={{
                                  fontSize: 18,
                                  fontFamily: 'LeagueSpartan-SemiBold',
                                  marginVertical: 5,
                                  marginRight: width * 0.03,
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
                                  height: width * 0.06,
                                  width: width * 0.12,
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
                                  fontFamily: 'LeagueSpartan-Regular',
                                  color: colors.orange_Base,
                                  marginTop: 7,
                                }}>
                                $ {item.price}
                              </Text>
                            </View>
                          </View>
                          <Text
                            style={{
                              fontSize: 12,
                              fontFamily: 'LeagueSpartan-Light',
                              width: width * 0.65,
                              textAlign: 'justify',
                            }}>
                            {item.desc}
                          </Text>
                        </View>
                      </Pressable>
                    );
                  }}
                />
              </View>
            </View>
          )}
        </ScrollView>
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
      backgroundColor:  colors.White_Bg,
      top: -5,
      height: width * 1.65,
      borderRadius: 27,
      overflow:'hidden'
      // paddingHorizontal:20
    },
    flatlistContainer: {
      alignItems: 'center',
      borderTopLeftRadius: 23,
      borderTopRightRadius: 23,
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
      paddingHorizontal: 10,
    },
    flatlistImage: {
      width: width * 0.09,
      height: width * 0.09,
      resizeMode: 'contain',
    },
    headerText: {
      fontSize: 30,
      color: colors.White_1,
      fontFamily: 'LeagueSpartan-Bold',
    },
    subText: {
      fontSize: 13,
      color: colors.orange_Base,
      fontFamily: 'LeagueSpartan-Medium',
    },
  });

export default Home;
