import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import Dimensions from '../Global/Dimensions';
import Animated, { interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const { height, width } = Dimensions;

const TestPage = () => {
  const HEIGHT = 50; // Increased initial height
  const MIN_HEIGHT = 10; // Minimum height when scrolled
  const ScrollY = useSharedValue(0);

  const ScrollHandler = useAnimatedScrollHandler((event) => {
    ScrollY.value = event.contentOffset.y;
  });

  const headerStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        ScrollY.value,
        [0, HEIGHT],
        [HEIGHT, MIN_HEIGHT],
        'clamp'
      ),
      transform: [
        {
          translateY: interpolate(
            ScrollY.value,
            [0, HEIGHT],
            [0, -HEIGHT],
            'clamp'
          ),
        },
      ],
    };
  });

  return (
    <SafeAreaView style={{ flex: 1,}}>
      <Animated.View style={[{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'red',
        zIndex: 1,marginTop:200 ,
        alignItems: 'center',
        justifyContent: 'center'
      }, headerStyle]}>
        <Text style={{ fontSize: 20, color: 'white' }}>Menu</Text>
      </Animated.View>
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={ScrollHandler}
        contentContainerStyle={{ paddingTop: HEIGHT }}>
        {/* Your scrollable content goes here */}
        
          <Text  style={{ padding: 20, fontSize: 18 }}>Hello User</Text>
          <Text  style={{ padding: 20, fontSize: 18 }}>Hello User</Text>
          <Text  style={{ padding: 20, fontSize: 18 }}>Hello User</Text>
          <Text  style={{ padding: 20, fontSize: 18 }}>Hello User</Text>
          <Text  style={{ padding: 20, fontSize: 18 }}>Hello User</Text>
          <Text  style={{ padding: 20, fontSize: 18 }}>Hello User</Text>
          <Text  style={{ padding: 20, fontSize: 18 }}>Hello User</Text>
          <Text  style={{ padding: 20, fontSize: 18 }}>Hello User</Text>
          <Text  style={{ padding: 20, fontSize: 18 }}>Hello User</Text>
          <Text  style={{ padding: 20, fontSize: 18 }}>Hello User</Text>
          <Text  style={{ padding: 20, fontSize: 18 }}>Hello User</Text>
          <Text  style={{ padding: 20, fontSize: 18 }}>Hello User</Text>
          <Text  style={{ padding: 20, fontSize: 18 }}>Hello User</Text>
          <Text  style={{ padding: 20, fontSize: 18 }}>Hello User</Text>
          <Text  style={{ padding: 20, fontSize: 18 }}>Hello User</Text>
          <Text  style={{ padding: 20, fontSize: 18 }}>Hello User</Text>

        
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default TestPage;
