import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import PageHeader from '../Common/PageHeader';
import Dimensions from '../Global/Dimensions';
import Colors from '../Global/Colors';
import CustomButton from '../Common/customButton';
import {Milkshake, TransferDocument} from '../assets/Images';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Orders = () => {
  const {height, width} = Dimensions;
  const styles = createStyles({height, width});
  const navigation=useNavigation()
  const Data = [{title: 'Active'}, {title: 'Completed'}, {title: 'Cancelled'}];
  const ExtraData = [
    {
      title: 'Strawberry Shake',
      image: Milkshake,
      timestamp: '29 Nov, 01:20 pm',
      price: '20.00',
      qty: 2,
    },
    {
      title: 'Merry Shake',
      image: Milkshake,
      timestamp: '29 Nov, 01:20 pm',
      price: '20.00',
      qty: 2,
      status:'completed'
    },
    {
      title: 'Berry Shake',
      image: Milkshake,
      timestamp: '29 Nov, 01:20 pm',
      price: '20.00',
      qty: 2,
      status:'cancelled'
    }
  ];

  const [active, setactive] = useState(0);
  const handleNavigation=path=>{
    navigation.navigate(path)
  }
  const EmptyData=()=>{
    return(
    <View style={{height:height*.7,padding:10,justifyContent:'center',alignItems:'center'}}>
    <Image source={TransferDocument}/>
    <Text style={{color:Colors.orange_Base,fontSize:30,textAlign:'center',width:width*.74,fontFamily:'LeagueSpartan-Medium',marginVertical:10}}>You don't have any active orders at this time</Text>
    </View>
    )
  }
  return (
    <View>
      <PageHeader Title="My Orders" />
      <View style={styles.container}>
        <View
          style={{
            paddingHorizontal: 5,
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <FlatList
            horizontal
            data={Data}
            renderItem={({item, index}) => {
              return (
                <CustomButton
                  type="small"
                  title={item.title}
                  margin={5}
                  buttonColor={index === active ? null : Colors.Orange_2}
                  textColor={index === active ? null : Colors.orange_Base}
                  onPress={() => {
                    setactive(index);
                  }}
                />
              );
            }}
          />
        </View>
        <FlatList
          data={ExtraData} 
          ListEmptyComponent={<EmptyData/>}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  borderColor: Colors.Orange_3,
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  alignSelf: 'center',
                  width: width * 0.83,
                  paddingVertical: 16,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: width * 0.3,
                    width: width * 0.2,
                    overflow: 'hidden',
                    borderRadius: (width * 0.2) / 3,
                  }}>
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    style={{height: width * 0.33, width: width * 0.2}}
                  />
                </View>

                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width:width*.65
                    }}>
                    <View style={{padding: 10}}>
                      <Text
                        style={{
                          fontSize: 19,
                          fontWeight: '600',
                          marginVertical: 3,
                        }}>
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '300',
                          marginVertical: 3,
                        }}>
                        {item.timestamp}
                      </Text>
                      {item.status=='cancelled'|| item.status=='completed'?
                      <View style={{flexDirection:'row',alignItems:'flex-start',marginTop:height*.008}}><AntDesign style={{marginRight:width*.02}}name={item.status!=='cancelled'?item.status=="completed"?"checkcircleo":null:'closecircleo'} color={Colors.orange_Base}/>
                      <Text style={{fontFamily:'LeagueSpartan-Light',fontSize:14,color:Colors.orange_Base}}>{item.status!=='cancelled'?item.status=="completed"?"Order Delivered":null:'Order Cancelled'}</Text></View>:null}
                    </View>
                    <View style={{justifyContent: 'flex-end'}}>
                      <Text
                        style={{
                          fontSize: 19,
                          fontWeight: '400',
                          marginVertical: 3,
                        }}>
                        ${item.price}
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '300',
                          marginVertical: 3,
                          alignSelf: 'flex-end',
                        }}>
                        {item.qty} items
                      </Text>
                    </View>
                  </View>
                  <View></View>
                  {item.status!=="cancelled"?
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginLeft: 10,
                    }}>
                    <CustomButton type="tiny" title={item.status=='completed'?"Leave a review":"Cancel Order"} onPress={()=>handleNavigation('CancelOrder')} />
                    <CustomButton
                      type="tiny"
                      buttonColor={Colors.Orange_2}
                      textColor={Colors.orange_Base}
                      title={item.status=='completed'?"Order Again":"Track Order"}
                    />
                  </View>:null}
                </View>
              </View>
            );
          }}
        />
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
      paddingTop: 15,
    },
  });
export default Orders;
