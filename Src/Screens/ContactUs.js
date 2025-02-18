import {View, Text, StyleSheet, Animated} from 'react-native';
import React, {useEffect, useState} from 'react';
import PageHeader from '../Common/PageHeader';
import Dimensions from '../Global/Dimensions';
import Colors from '../Global/Colors';
import CustomButton from '../Common/customButton';
import ExpandingList from '../Common/ExpandingList';
import {
  Facebook,
  Headphones,
  Instagram,
  Website,
  WhatApp,
} from '../assets/Images';
import SearchBar from '../Common/SearchBar';

const ContactUs = () => {
  const {height, width} = Dimensions;
  const styles = createStyles({height, width});
  const [Active, setActive] = useState(0);
  const [SubActive, setSubActive] = useState(0);
  const View1 = new Animated.Value(0);
  const View2 = new Animated.Value(0);
  const Data = [
    {Name: 'Customer Service', Icon: Headphones},
    {Name: 'Website', Icon: Website},
    {Name: 'Whatsapp', Icon: WhatApp},
    {Name: 'Facebook', Icon: Facebook},
    {Name: 'Instagram', Icon: Instagram},
  ];

  const FaqData = [
    {
      Name: 'Lorem ipsum dolor sit amet?',
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.',
    },
    {
      Name: 'Lorem ipsum dolor sit amet?',
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.',
    },
    {
      Name: 'Lorem ipsum dolor sit amet?',
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.',
    },
    {
      Name: 'Lorem ipsum dolor sit amet?',
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.',
    },
    {
      Name: 'Lorem ipsum dolor sit amet?',
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.',
    },
    {
      Name: 'Lorem ipsum dolor sit amet?',
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.',
    },
  ];

  const handlePress = (type, id) => {
    switch (type) {
      case 'Main':
        setActive(id);
        break;
      case 'Sub':
        setSubActive(id);
        break;
    }
  };
  useEffect(() => {
    Animated.timing(View1, {
      toValue: -10,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(View2, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [Active]);
  const animatedStyle1 = {opacity: View2};
  return (
    <>
      <PageHeader
        Title={Active == 1 ? 'Contact Us' : 'Help & FAQs'}
        subTitle="How can we help you ?"
      />
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <CustomButton
            type="small-Xlong"
            margin={5}
            buttonColor={Active === 0 ? null : Colors.Orange_3}
            StyleText={{fontWeight: '500'}}
            textColor={Active === 0 ? Colors.White_1 : Colors.orange_Base}
            onPress={() => handlePress('Main', 0)}
            title="FAQ"
          />
          <CustomButton
            type="small-Xlong"
            margin={5}
            buttonColor={Active === 1 ? null : Colors.Orange_3}
            StyleText={{fontWeight: '500'}}
            textColor={Active === 1 ? Colors.White_1 : Colors.orange_Base}
            onPress={() => handlePress('Main', 1)}
            title="Contact Us"
          />
        </View>
        {Active === 0 ? (
          <>
            <Animated.View
              style={[
                {
                  marginTop:height*.023,
                  flexDirection: 'row',
                  alignSelf: 'center',
                  transform: [{translateY: View1}],
                },
                animatedStyle1,
              ]}>
              <CustomButton
                type="tiny-long"
                margin={5}
                buttonColor={SubActive === 0 ? null : Colors.Orange_3}
                StyleText={{fontWeight: '500'}}
                textColor={
                  SubActive === 0 ? Colors.White_1 : Colors.orange_Base
                }
                onPress={() => handlePress('Sub', 0)}
                title="General"
              />
              <CustomButton
                type="tiny-long"
                margin={5}
                buttonColor={SubActive === 1 ? null : Colors.Orange_3}
                StyleText={{fontWeight: '500'}}
                textColor={
                  SubActive === 1 ? Colors.White_1 : Colors.orange_Base
                }
                onPress={() => handlePress('Sub', 1)}
                title="Account"
              />
              <CustomButton
                type="tiny-long"
                margin={5}
                buttonColor={SubActive === 2 ? null : Colors.Orange_3}
                StyleText={{fontWeight: '500'}}
                textColor={
                  SubActive === 2 ? Colors.White_1 : Colors.orange_Base
                }
                onPress={() => handlePress('Sub', 2)}
                title="Services"
              />
            </Animated.View>
            <View style={{marginVertical: 10}}>
              <SearchBar Icon={true} />
              <ExpandingList Data={FaqData} />
            </View>
          </>
        ) : (
          <View style={{marginVertical: 10}}>
            <ExpandingList Type="iconList" Data={Data} />
          </View>
        )}
      </View>
    </>
  );
};
const createStyles = ({height, width}) =>
  StyleSheet.create({
    container: {
      top: -width * 0.05,
      borderRadius: width * 0.06,
      backgroundColor: Colors.White_Bg,
      height: 600,
      padding: 20,
    },
  });

export default ContactUs;
