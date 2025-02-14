import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import PageHeader from '../Common/PageHeader';
import CardView from '../Common/CardView';
import Dimensions from '../Global/Dimensions';
import Colors from '../Global/Colors';
import CustomTextInput from '../Common/CustomTextInput';
import CustomButton from '../Common/customButton';
import { useNavigation } from '@react-navigation/native';

const AddNewCard = () => {
  const {height, width} = Dimensions;
  const navigation=useNavigation(0)
  const styles = createStyles({height, width});
  const [Name, setName] = useState('');
  const [CardNumber, setCardNumber] = useState('');
  const [Expiry, setExpiry] = useState('');
  const [CVV, setCVV] = useState('');
  const Data = [
    {Name: 'Card Holder Name',placeholder:"Name"},
    {Name: 'Card Number',placeholder:"0000 0000 0000 0000"},
    {Name: 'Expiry Date',placeholder:"MM/YY"},
    {Name: 'CVV',placeholder:'CVV'},
  ];
  const handleTextChange = (id, text) => {
    switch (id) {
      case 'Card Holder Name':
        setName(text);
        break;
      case 'Card Number':
        setCardNumber(text);
        break;
      case 'CVV':
        setCVV(text);
        break;
      case 'Expiry Date':
        setExpiry(text);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <PageHeader Title="Add Card" />
      <View style={styles.container}>
        <View style={{marginVertical: 20}}>
          <CardView Name={Name} CardNumber={CardNumber} Cvv={CVV}Expiry={Expiry}/>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center',height:height*.27,}}>
          <FlatList
            data={Data}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <View style={{marginVertical: 10}}>
                  {item.Name !== 'CVV' && item.Name !== 'Expiry Date' ? (
                    <View style={{marginVertical: 10}}>
                      <Text style={{marginVertical: 5}}>{item.Name}</Text>
                      <CustomTextInput
                        width={width}
                        onChangeText={text => handleTextChange(item.Name, text)}
                        backgroundColor={Colors.yellow}
                        placeholder={item.placeholder}
                      />
                    </View>
                  ) : null}
                </View>
              );
            }}
          />
        </View>
        <View style={{flexDirection:'row',alignSelf:'flex-start',marginLeft:20,width:width*.7,justifyContent:'space-between'}}>
        {Data.map(item => (
            item.Name == 'CVV' || item.Name == 'Expiry Date' ? 
              <View style={{}}>
                <Text style={{marginVertical: 5}}>{item.Name}</Text>
                <CustomTextInput
                 type="Small"
                  width={width}
                  height={height*.05}
                  onChangeText={text => handleTextChange(item.Name, text)}
                  backgroundColor={Colors.yellow}
                  placeholder={item.placeholder}
                />
              </View>
            : null
        ))}
            </View>
            <View style={{marginVertical:height*.04}}>
            <CustomButton type='small' title="Save Card" StyleText={{fontWeight:'600'}} onPress={()=>{navigation.navigate('ContactUs')}}/>

            </View>

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
      height: height,
      padding: 15,
      alignItems: 'center',
    },
  });
export default AddNewCard;
