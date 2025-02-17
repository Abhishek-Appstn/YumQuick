import {SafeAreaView, View} from 'react-native';
import React from 'react';
import PageHeader from '../Common/PageHeader';
import {useRoute} from '@react-navigation/native';
import Colors from '../Global/Colors';
import Dimensions from '../Global/Dimensions';

const Layout = ({children, name}) => {
  const route = useRoute();
  const {height, width} = Dimensions;
  return (
  
      <SafeAreaView
        style={{
          top: -width * 0.06,
          height: height ,
          borderTopLeftRadius: width * 0.088,
          borderTopRightRadius: width * 0.088,
          backgroundColor: Colors.White_1,
          alignItems: 'center',
         
      
        }}>
          <View style={{width:width*.85}}>
          {children}

          </View>
      </SafeAreaView>

  );
};

export default Layout;
