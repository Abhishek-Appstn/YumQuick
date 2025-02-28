import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ImageBackground,
  Pressable,
} from 'react-native';
import React from 'react';
import Colors from '../../Global/Colors';
import Dimensions from '../../Global/Dimensions';
import ImageView from '../ImageView';
import {useNavigation} from '@react-navigation/native';

const DisplayCard = props => {
  const {height, width} = Dimensions;
  console.log('Data',props.Data)
  const data = [
    {
      name: 'Sushi',
      image: require('../../assets/Images/Sushi.png'),
      price: '103.0',
      rating: '5.0',
      addon: [
        {name: 'Shrimp', price: '2.99'},
        {name: 'Crisp Onion', price: '1.99'},
        {name: 'Sweet Corn', price: '0.99'},
        {name: 'Shrimp', price: '2.99'},
        {name: 'Crisp Onion', price: '1.99'},
        {name: 'Sweet Corn', price: '0.99'},
      ],
    },
    {
      name: 'Rice',
      image: require('../../assets/Images/Rice.png'),
      rating: '4.0',
      price: '50.0',
    },
    {
      name: 'Sandwich',
      image: require('../../assets/Images/Sandwich.png'),
      price: '12.99',
      rating: '2.0',
    },
    {
      name: 'CupCake',
      image: require('../../assets/Images/cupcake.png'),
      price: '8.2',
      rating: '5.0',
    },
  ];

  const bigData = [
    {
      name: 'Burger',
      image: require('../../assets/Images/Burger.png'),
      price: '103.0',
    },
    {
      name: 'Shawarma',
      image: require('../../assets/Images/Shawarma.png'),
      price: '50.0',
    },
    {
      name: 'Sandwich',
      image: require('../../assets/Images/Sandwich.png'),
      price: '12.99',
    },
    {
      name: 'CupCake',
      image: require('../../assets/Images/cupcake.png'),
      price: '8.2',
    },
  ];

  const styles = createStyles({height, width});
  const navigation = useNavigation();
  return (
    <View style={{}}>
      <View style={styles.container}>
        <Text style={styles.headerText}>{props.title}</Text>
        {props.more === true ? (
          <View style={styles.moreContainer}>
            <Text style={styles.moreText}>View All</Text>
            <Image
              source={require('../../assets/Images/RightArrow.png')}
              style={styles.icon}
              resizeMode="contain"
            />
          </View>
        ) : null}
      </View>

      {props.type === 'large' ? (
        <ImageView data={bigData} type="large" />
      ) : (
        <ImageView data={props.Data} />
      )}
    </View>
  );
};
const createStyles = ({height, width}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 5,
    },
    moreContainer: {
      flexDirection: 'row',
      // alignItems: 'center',
    },
    moreText: {
      color: Colors.orange_Base,
      fontSize: 13,
      fontFamily: 'LeagueSpartan-SemiBold',
    },
    headerText: {
      fontSize: 20,
      fontFamily: 'LeagueSpartan-Medium',
    },
    icon: {height: 10, width: 10, resizeMode: 'contain', marginLeft: 10},
  });

export default DisplayCard;
