import {
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import Dimensions from '../../Global/Dimensions';
import Colors from '../../Global/Colors';
import {useNavigation} from '@react-navigation/native';
import {
  Heart,
  HeartFilled_orange,
  HeartOutline_orange,
  Snacks,
} from '../../assets/Images';
const {height, width} = Dimensions;
const ImageView = props => {
  const styles = createStyles({height, width, props});
  const navigation = useNavigation();
  console.log("INcoming data is",props.data)
  return (
    <FlatList
    ListEmptyComponent={<><Text>Empty </Text></>}
      showsHorizontalScrollIndicator={false}scrollEnabled={props.type=="large"?false:true}
      showsVerticalScrollIndicator={false}
      horizontal={props.type == 'large' ? false : true}
      numColumns={props.type === 'large' ? 2 : null}
      data={props.data}
      renderItem={({item, index}) => {
        console.log("Data is item",item)
        return (
          <Pressable
            style={styles.imageWrapper}
            onPress={() => {
              navigation.navigate('ProductPage', {item});
            }}>
            <ImageBackground source={{uri:item.Image}} style={styles.image}>
              {props.BestSeller ? (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 5,
                    marginTop: 5,
                  }}>
                  <View
                    style={{
                      padding: 5,
                      backgroundColor: Colors.White_1,
                      borderRadius: 40,
                    }}>
                    <Image source={Snacks} />
                  </View>
                  <View
                    style={{
                      height: width * 0.06,
                      width: width * 0.06,
                      backgroundColor: Colors.White_1,
                      borderRadius: 50,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 5,
                    }}>
                    <Image source={HeartFilled_orange} />
                  </View>
                </View>
              ) : null}
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}> ${item.price}</Text>
              </View>
            </ImageBackground>
          </Pressable>
        );
      }}
    />
  );
};
const createStyles = ({height, width, props}) =>
  StyleSheet.create({
    imageWrapper: {
      overflow: 'hidden',
      height: width * 0.4,
      width: props.type === 'large' ? width * 0.45 : width * 0.24,
      borderRadius: (width * 0.4) / 4,
    },
    image: {
      width: props.type === 'large' ? width * 0.4 : width * 0.2,
      height: props.type === 'large' ? width * 0.4 : width * 0.3,
      marginVertical: 10,
      marginHorizontal: 6,
      borderRadius: 100,
      resizeMode: 'cover',
    },
    priceContainer: {
      backgroundColor: Colors.orange_Base,
      width: width * 0.16,
      height: width * 0.055,
      position: 'absolute',
      bottom: 14,
      right: 0,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    priceText: {
      color: Colors.White_1,
      fontSize: 12,
      fontWeight: '500',
    },
  });

export default ImageView;
