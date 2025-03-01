import {
  View,
  Text,
  Image,
  ImageBackground,
  Animated,
  Pressable,
  Alert,
  FlatList,
} from 'react-native';
import React, {useRef, useState} from 'react';
import PageHeader from '../Common/PageHeader';
import Layout from './Layout';
import Colors from '../Global/Colors';
import Dimensions from '../Global/Dimensions';
import ImageView from '../Common/ImageView';
import {Milkshake, Minus, Plus, Pork_Skewer, Shopping_Cart_White} from '../assets/Images';

const Recomendations = () => {
  const {height, width} = Dimensions;
  const AnimatedLength = useRef(new Animated.Value(0)).current;
  const AnimatedOpacity = useRef(new Animated.Value(0)).current

  console.log(AnimatedLength);
  const [count, setcount] = useState(0);
  const [Active, setActive] = useState(false);

  const Animation = () => {
    Animated.parallel([
     AnimatedOpacity._value==0?(
    Animated.timing(AnimatedLength, {
      toValue: AnimatedLength._value == 0 ? width * 0.5 : 0,
      duration: 500,
      useNativeDriver: false,
    }),
    Animated.timing(AnimatedOpacity,{
        toValue:AnimatedOpacity._value==0?1:0,
        duration:500,
        useNativeDriver:false
    })):(
      
      Animated.timing(AnimatedOpacity,{
          toValue:AnimatedOpacity._value==0?1:0,
          duration:500,
          useNativeDriver:false
      })),Animated.timing(AnimatedLength, {
        toValue: AnimatedLength._value == 0 ? width * 0.5 : 0,
        duration: 500,
        useNativeDriver: false,
      })
  
    ]).start(()=>{setActive(!Active)})
}
  const ItemView = () => {
    return (
      <View style={{flexDirection:'row',height:width*.35}}>
        <View
          style={{
            overflow: 'hidden',
            height: width * 0.35,
            flexDirection: 'row',
            borderRadius: width * 0.04,
            width:width*.3
          }}>
          <Pressable onPress={Animation}>
            <ImageBackground
              style={{
                height: width * 0.35,
                width: width * 0.35,
               
              }}
              resizeMode="coverßß"
              source={Milkshake}></ImageBackground>
          </Pressable>
          </View>
          <Animated.View
            style={{
              width: AnimatedLength,
              marginLeft: 10,
              justifyContent: 'space-between',
              opacity:AnimatedOpacity
            }}>
              <>
                <View
                  style={{
                    backgroundColor: Colors.orange_Base,
                    width: width * 0.3,
                    borderRadius: 10,
                    padding: 5,
                    borderTopLeftRadius: width * 0.02,
                    borderBottomLeftRadius: width * 0.02,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'LeagueSpartan-Medium',
                      fontSize: 16,
                      color: Colors.White_1,
                    }}>
                    New Product
                  </Text>
                </View>
                <View style={{width:width*.5}}>
                <Text
                  style={{
                    fontFamily: 'LeagueSpartan-Medium',
                    fontSize: 16,
                    color: Colors.Font,
                    marginTop: 8,

                  }}>
                  Chocolate and Fruit Crepes
                </Text>
                <Text
                  style={{
                    fontFamily: 'LeagueSpartan-Light',
                    fontSize: 12,
                    color: Colors.Font,
                    marginTop: 8,
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'LeagueSpartan-Medium',
                      fontSize: 20,
                      color: Colors.orange_Base,
                      marginTop: 8,
                    }}>
                    $15.00
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Pressable
                      style={{
                        height: height * 0.025,
                        width: height * 0.025,
                        borderRadius: height,
                        backgroundColor: Colors.orange_Base,
                        justifyContent: 'center',
                        marginHorizontal: 5,
                        alignItems: 'center',
                      }}
                      onPress={() => {
                        count > 0 ? setcount(count - 1) : null;
                      }}>
                      <Image source={Minus} />
                    </Pressable>
                    <Text style={{fontWeight: '400', fontSize: 15}}>
                      {count}
                    </Text>
                    <Pressable
                      style={{
                        height: height * 0.025,
                        width: height * 0.025,
                        borderRadius: height,
                        backgroundColor: Colors.orange_Base,
                        justifyContent: 'center',
                        marginHorizontal: 5,
                        alignItems: 'center',
                      }}
                      onPress={() => {
                        setcount(count + 1);
                      }}>
                      <Image source={Plus} />
                    </Pressable>
                    <Pressable
                      style={{
                        height: height * 0.03,
                        width: height * 0.03,
                        borderRadius: (height * 0.02) / 2,
                        backgroundColor: Colors.orange_Base,
                        justifyContent: 'center',

                        alignItems: 'center',
                      }}
                      onPress={() => {
                        setcount(count + 1);
                      }}>
                      <Image source={Shopping_Cart_White} />
                    </Pressable>
                  </View>
                </View>
              </>
            {/* ) : null} */}
          </Animated.View>
        </View>
    //   </View>
    );
  };
  return (
    <View>
      <PageHeader Title="Recommendations" />
      <Layout>
        <View style={{marginTop: height * 0.02}}>
          <Text
            style={{
              color: Colors.orange_Base,
              width: width * 0.6,
              textAlign: 'center',
              fontFamily: 'LeagueSpartan-Medium',
              fontSize: 20,
              alignSelf: 'center',
              marginVertical:10
            }}>
            Discover the dishes recommended by the chef.
          </Text>
         
          <ItemView />

          <FlatList numColumns={2} data={['','','','']} contentContainerStyle ={{paddingBottom:500}}renderItem={({item,index})=>{
return(
  <View style={{width:width*.4,
   marginRight:index%2!=0?0:20

  }}>
  <View
  style={{
    overflow: 'hidden',
    height: width * 0.35,
    flexDirection: 'row',
    borderRadius: 20,
    width:width*.4,
    marginRight:width*.05,marginVertical:width*.04,
  }}>
    <ImageBackground
      style={{
        height: width * 0.35,
        width: width * 0.4,
      }}
      resizeMode="coverßß"
      source={Milkshake}></ImageBackground>
  </View>
      <Text style={{fontFamily:'LeagueSpartan-Medium',fontSize:16}}>Bean and Vegetable Burger</Text>
      <Text style={{fontFamily:'LeagueSpartan-Light',fontSize:12}}>Bean and Vegetable </Text>
      <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',marginTop:10
    
                  }}>
                  <Text
                    style={{
                      fontFamily: 'LeagueSpartan-Medium',
                      fontSize: 20,
                      color: Colors.orange_Base,
                      marginTop: 8,
                    }}>
                    $15.00
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Pressable
                      style={{
                        height: height * 0.025,
                        width: height * 0.025,
                        borderRadius: height,
                        backgroundColor: Colors.orange_Base,
                        justifyContent: 'center',
                        marginHorizontal: 5,
                        alignItems: 'center',
                      }}
                      onPress={() => {
                        count > 0 ? setcount(count - 1) : null;
                      }}>
                      <Image source={Minus} />
                    </Pressable>
                    <Text style={{fontWeight: '400', fontSize: 15}}>
                      {count}
                    </Text>
                    <Pressable
                      style={{
                        height: height * 0.025,
                        width: height * 0.025,
                        borderRadius: height,
                        backgroundColor: Colors.orange_Base,
                        justifyContent: 'center',
                        marginHorizontal: 5,
                        alignItems: 'center',
                      }}
                      onPress={() => {
                        setcount(count + 1);
                      }}>
                      <Image source={Plus} />
                    </Pressable>
                    <Pressable
                      style={{
                        height: height * 0.03,
                        width: height * 0.03,
                        borderRadius: (height * 0.02) / 2,
                        backgroundColor: Colors.orange_Base,
                        justifyContent: 'center',

                        alignItems: 'center',
                      }}
                      onPress={() => {
                        setcount(count + 1);
                      }}>
                      <Image source={Shopping_Cart_White} />
                    </Pressable>
                  </View>
                </View>
      </View>

)
          }}/>
        </View>
      </Layout>
    </View>
  );
};

export default Recomendations;
