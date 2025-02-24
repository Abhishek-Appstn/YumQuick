import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Image,
  Pressable,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Dimensions from '../../Global/Dimensions';
import Colors from '../../Global/Colors';

const data = [
  {key: '1', offerHeader: 'Experience our delicious new dish', offerValue:'30',image: require('../../assets/Images/Pizza.png')},
  {key: '2', offerHeader: 'Enjoy Authentic Arabian Delicacies', offerValue:'20',image: require('../../assets/Images/Tikka.png')},
  {key: '3', offerHeader: 'Refresh your Taste buds with Tradional Masterpieces', offerValue:'10',image: require('../../assets/Images/Traditional.png')},

];

const Carousal = props => {
  
  
  const {height, width} = Dimensions;
  const styles = createStyles({height, width});
  const [activeCarousal, setactiveCarousal] = useState(0);
  const ref = useRef(null);
  const renderItem = ({item}) => (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: Colors.orange_Base,
          flex: 2,
          flexDirection: 'row',
        }}>
        <View style={{flex: 1}}>
          <View style={{flex: 1}}>
            <View style={{flex: 1}}>
              <View
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 35,
                  backgroundColor: Colors.orange_Base,
                  position: 'absolute',
                  right: -20,
                  top: -50,
                  borderColor: Colors.yellow_Base,
                  borderWidth: 10,
                  zIndex:2
                }}
              />
            </View>
            <View
              style={{
                flex: 4,
                padding: 5,
                paddingTop:0,
                marginTop:width*.04,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: Colors.White_1,
                  fontWeight: '500',
                  textAlign: 'center',
                  maxWidth: width * 0.38,
                }}>
               {item.offerHeader}
              </Text>
              <Text
                style={{
                  color: Colors.White_1,
                  fontWeight: '900',
                  textAlign: 'center',
                  maxWidth: width * 0.38,
                  fontSize: 30,
                  letterSpacing: 1.2,
                }}>
                {item.offerValue}% OFF
              </Text>
            </View>
            <View style={{flex: 1}}>
              <View
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 35,
                  backgroundColor: Colors.orange_Base,
                  position: 'absolute',
                  left: -26,
                  bottom: -46,
                  borderColor: Colors.yellow_Base,
                  borderWidth: 10,zIndex:2
                }}
              />
            </View>
          </View>
        </View>
        <View style={{flex: 1, }}>
          <Image
            source={item.image}
            resizeMode="cover"
            style={{width: width * 0.46, height: width * 0.3}}></Image>
        </View>
      </View>

      <View></View>
    </View>
  );
  const renderButtons = ({item, index}) => (
    <Pressable style={styles.barContainer} onPress={() => handleScroll(index)}>
      <View
        style={[
          index === activeCarousal
            ? styles.barActivestyle
            : styles.barInactivestyle,
        ]}
      />
    </Pressable>
  );
  const onViewableItemsChanged = ({viewableItems}) => {
    if (viewableItems.length > 0) {
      setactiveCarousal(viewableItems[0].index);
    }
  };
  const handleScroll = index => {
    setactiveCarousal(index);
    ref.current.scrollToIndex({animated: true, index});
  };
  return (
    <View>
      <FlatList
        ref={ref}
        data={data}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        keyExtractor={item => item.key}
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={{itemVisiblePercentThreshold: 80}}
        onViewableItemsChanged={onViewableItemsChanged}
      />
      <FlatList
        data={data}
        renderItem={renderButtons}
        horizontal
        keyExtractor={item => item.key}
        showsHorizontalScrollIndicator={false}
        style={{alignSelf: 'center', marginTop:5}}
      />
    </View>
  );
};
const createStyles = ({height, width}) =>
  StyleSheet.create({
    container: {
      height: width * 0.3,
      borderRadius: width * 0.05,
      backgroundColor: 'red',
      marginHorizontal: 5,
      alignSelf: 'center',
      overflow: 'hidden',
    },
    barActivestyle: {
      width: width * 0.06,
      height: height * 0.008,
      backgroundColor: Colors.orange_Base,
      borderRadius: width * 0.02,
    },
    barInactivestyle: {
      width: width * 0.06,
      height: height * 0.008,
      backgroundColor: Colors.Orange_2,
      borderRadius: width * 0.02,
    },
    barContainer: {
      marginVertical: 5,
      marginHorizontal: 5,
    },
    carouselItem: {
      height: width * 0.6,
      width: width * 0.8,
      borderRadius: width * 0.05,
      backgroundColor: 'skyblue',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: width * 0.025,
    },
    carouselText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  });
export default Carousal;
