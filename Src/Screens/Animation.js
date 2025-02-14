import {View, Text, Animated, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';

const Animation = () => {
  const Xvalue = new Animated.Value(0);
  const Yvalue = new Animated.Value(0);

  const Anima = value => {
    Animated.timing(Xvalue, {
      toValue: value,
      useNativeDriver: false,
      duration: 5000,
    }).start();
  };
  const SAnima = value => {
    Animated.timing(Yvalue, {
      toValue: value,
      useNativeDriver: false,
      duration: 5000,
    }).start();
  };
  useEffect(() => {
    Animated.loop([
      Animated.sequence([
        Animated.parallel[(Anima(200), SAnima(200))],
        Animated.parallel[(Anima(140), SAnima(140))],
      ]),
    ]);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Animated.View
        style={{
          backgroundColor: 'red',
          height: 200,
          width: 200,
          borderRadius: 100,
          transform: [{translateX: Xvalue}, {translateY: Yvalue}],
        }}></Animated.View>
    </SafeAreaView>
  );
};

export default Animation;
