import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import PageHeader from '../Common/PageHeader';
import Dimensions from '../Global/Dimensions';
import Colors from '../Global/Colors';
import CustomButton from '../Common/customButton';
import {Checkmark, Checkmark_filled, Milkshake} from '../assets/Images';

const CancelOrders = () => {
  const {height, width} = Dimensions;
  const styles = createStyles({height, width});
  const qs = 'Lorem ipsum dolor sit amet';
  const Data = [
    {qs: qs},
    {qs: 'Lorem Ipsim'},
    {qs: qs},
    {qs: qs},
    {qs: qs},
    {qs: qs},
  ];
  const [Active, setActive] = useState(0);
  const HandlePress = index => {
    setActive(index);
  };
  return (
    <View>
      <PageHeader Title="Cancel Order" />
      <View style={styles.container}>
        <Text
          style={{
            width: width * 0.83,
            textAlign: 'justify',
            alignSelf: 'center',
            marginBottom: 10,
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          pellentesque congue lorem, vel tincidunt tortor.
        </Text>
        <ScrollView>
          <FlatList
            data={Data}
            renderItem={({item, index}) => {
              return (
                <Pressable onPress={() => HandlePress(index)}
                  style={{
                    flexDirection: 'row',
                    borderColor: Colors.Orange_3,
                    borderTopWidth: 1,
                    alignSelf: 'center',
                    width: width * 0.83,
                    paddingVertical: 20,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontWeight: '600'}}>{item.qs}</Text>
                  
                    <Image
                      source={Active === index ? Checkmark_filled : Checkmark}
                    />
                  </Pressable>
              );
            }}
          />
          <View
            style={{
              alignSelf: 'center',
              width: width * 0.83,
              borderTopWidth: 1,
              borderColor: Colors.Orange_3,
              paddingVertical: 18,
            }}>
            <Text style={{fontWeight: '600'}}>Others</Text>
            <TextInput
              multiline={true}
              style={{
                backgroundColor: Colors.yellow,
                borderRadius: (width * 0.3) / 6,
                height: width * 0.25,
                padding: 15,
                marginTop: 12,
                marginBottom: 7,
              }}
              placeholder="Other Reason...."
            />
            <CustomButton type="medium" title="Cancel" />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const createStyles = ({height, width}) =>
  StyleSheet.create({
    container: {
      top: -width * 0.05,
      borderRadius: width * 0.06,
      backgroundColor: Colors.White_Bg,
      height: height,
      padding: 15,
      paddingTop: 40,
    },
  });
export default CancelOrders;
