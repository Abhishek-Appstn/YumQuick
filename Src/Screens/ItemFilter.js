import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import PageHeader from '../Common/PageHeader';
import Layout from './Layout';
import Dimensions from '../Global/Dimensions';
import Colors from '../Global/Colors';
import {Filter, Heart_filled_white, Star, Star_Filled} from '../assets/Images';
import CustomButton from '../Common/customButton';
import Slider from '@react-native-community/slider';

const ItemFilter = () => {
  const data = [
    {id: '1', name: 'Snacks', image: require('../assets/Images/Snacks.png')},
    {id: '2', name: 'Meal', image: require('../assets/Images/Meals.png')},
    {id: '3', name: 'Vegan', image: require('../assets/Images/Vegan.png')},
    {
      id: '4',
      name: 'Dessert',
      image: require('../assets/Images/Desserts.png'),
    },
    {id: '5', name: 'Drinks', image: require('../assets/Images/Drinks.png')},
  ];
  const filters = [
    {id: '1', name: 'Sushi'},
    {id: '2', name: 'Pizza'},
    {id: '3', name: 'Curry'},
    {id: '1', name: 'Sushi'},
    {id: '2', name: 'Pizza'},
    {id: '3', name: 'Curry'},
    {
      id: '4',
      name: 'Salmon',
    },
    {id: '5', name: 'Appetizer'},
  ];
  const [Active, setActive] = useState(null);
  const [Rating, setRating] = useState(0);
  const [Price, setPrice] = useState(0);

  const [array, setarray] = useState([]);
  const {height, width} = Dimensions;
  const styles = createStyles({height, width});
  return (
    <View>
      <PageHeader Title="Filter" />
      <Layout>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 199,marginTop:height*.04}}
          style={{height: height}}>
          <Text
            style={{
              fontFamily: 'LeagueSpartan-Medium',
              fontSize: 20,
              marginBottom: 10,
            }}>
            Categories
          </Text>
          <FlatList
            data={data}
            horizontal={true}
            contentContainerStyle={{
              width: width * 0.85,
              paddingBottom: 15,
              borderBottomWidth: 1,
              borderColor: Colors.Orange_3,
            }}
            scrollEnabled={false}
            renderItem={({item, index}) => (
              <Pressable
                style={[styles.flatlistContainer]}
                onPress={() => {
                  Active == index ? setActive(null) : setActive(index);
                }}>
                <View
                  style={[
                    styles.flatlistInnerContainer,
                    {
                      backgroundColor:
                        Active === index ? Colors.yellow_Base : Colors.yellow,
                    },
                  ]}>
                  <Image source={item.image} style={styles.flatlistImage} />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'LeagueSpartan-Regular',
                    color: Colors.Font,
                  }}>
                  {item.name}
                </Text>
              </Pressable>
            )}
          />
          <View
            style={{
              borderColor: Colors.Orange_3,
              borderBottomWidth: 1,
              paddingBottom: 20,
            }}>
            <Text
              style={{
                fontFamily: 'LeagueSpartan-Medium',
                fontSize: 20,
                marginVertical: 10,
              }}>
              Sort By
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-light',
                  fontSize: 14,
                  marginVertical: 10,
                  marginRight: 5,
                }}>
                Top Rated
              </Text>
              {Array(5)
                .fill()
                .map((_, index) => (
                  <Pressable
                    style={{marginHorizontal: 3}}
                    onPress={() => {
                      Rating - 1 == index
                        ? setRating(null)
                        : setRating(index + 1);
                    }}>
                    <Image
                      style={{height: 18, width: 18}}
                      source={index + 1 > Rating ? Star : Star_Filled}
                    />
                  </Pressable>
                ))}
            </View>
          </View>
          <View
            style={{
              borderColor: Colors.Orange_3,
              borderBottomWidth: 1,
              paddingBottom: 20,
            }}>
            <Text
              style={{
                fontFamily: 'LeagueSpartan-light',
                fontSize: 14,
                marginVertical: 10,
                marginRight: 5,
              }}>
              Categories
            </Text>
            <FlatList
              columnWrapperStyle={{width: width * 0.85}}
              data={filters}
              numColumns={3}
              renderItem={({item, index}) => {
                return (
                  <Pressable
                    style={{
                      backgroundColor: array.includes(index)
                        ? Colors.orange_Base
                        : Colors.Orange_3,
                      height: width * 0.06,
                      borderRadius: 20,
                      marginVertical: 5,
                      width: width * 0.256,
                      marginRight: 15,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={() => {
                      array.includes(index)
                        ? setarray(array.filter(i => i !== index))
                        : setarray([...array, index]);
                    }}>
                    <Text
                      style={{
                        color: array.includes(index)
                          ? Colors.White_1
                          : Colors.orange_Base,
                        fontFamily: 'LeagueSpartan-Regular',
                        fontSize: 14.63,
                      }}>
                      {item.name}
                    </Text>
                  </Pressable>
                );
              }}
            />
          </View>

          <View style={{marginVertical: 10}}>
            <Text
              style={{
                fontFamily: 'LeagueSpartan-Medium',
                fontSize: 20,
                marginVertical: 10,
                color: Colors.orange_Base,
              }}>
              Price
            </Text>

            <Slider
        style={{ width: width * 0.8, alignSelf: 'center', height: 40 }}
        onValueChange={value => setPrice(parseInt(value))}
        value={Price}
        minimumValue={1}
        maximumValue={101}
        minimumTrackTintColor={Colors.orange_Base}
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor={Colors.orange_Base}
      />

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between',width:width*.8,alignSelf:'center'}}>
              <Text>$1</Text>
              <Text>$10</Text>
              <Text></Text>

              <Text>$50</Text>

              <Text>$100 {'>'}</Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text>{Price}</Text>
            <CustomButton type="medium-small" title="Apply" />
          </View>
        </ScrollView>
      </Layout>
    </View>
  );
};
const createStyles = ({height, width}) =>
  StyleSheet.create({
    flatlistContainer: {
      alignItems: 'center',
      borderRadius: 23,
      marginRight: 24,
    },
    flatlistInnerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.yellow,
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
      color: Colors.White_1,
      fontFamily: 'LeagueSpartan-Bold',
    },
  });
export default ItemFilter;
