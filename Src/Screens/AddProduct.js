import {View, Text, SafeAreaView, Pressable, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import Dimensions from '../Global/Dimensions';
import {Plus} from '../assets/Images';
import CustomTextInput from '../Common/CustomTextInput';
import CustomButton from '../Common/customButton';
import {
  addDoc,
  collection,
  getFirestore,
  query,
} from '@react-native-firebase/firestore';
import Colors from '../Global/Colors';
import FirestoreCreateDoc from '../Global/FirestoreCreateDoc';
import ImagePicker from 'react-native-image-crop-picker';
import Snackbar from 'react-native-snackbar';
const AddProduct = () => {
  const {height, width} = Dimensions;
  const [FormData, setFormData] = useState({
    price: '',
    name: '',
    description: '',
  });
  const HandleText = (text, key) => {
    setFormData({
      ...FormData,
      [key]: text,
    });
  };
  const HandleCreate = async () => {
    try {
      console.log('enter');

      const Upload = await FirestoreCreateDoc({
        collectionName: 'Products',
        data: FormData,
      });
      Upload !== null
        ? (Alert.alert('Product Created', `Id is ${Upload.id}`),
          setFormData({}))
        : Alert.alert('Failed');
    } catch (error) {
      console.log(error);
      Alert.alert('error');
    }
  };
  const HandleImageUpload = () => {
    ImagePicker.openPicker({
      height: 300,
      width: 400,
      includeBase64: true,
      cropping: true,
      freeStyleCropEnabled: true,
    })
      .then(image => {
        if (image.size > 1048575)
          Alert.alert(
            'Size Exceeded',
            'Image is Over 1 MB,Try with another Image',
          );
        else {
          const Base64 = `data:${image.mime};base64,${image.data}`;
          HandleText(Base64, 'Image');
          console.log(Base64);

          Snackbar.show({
            text: 'Image Uploaded',
          });
        }
      })
      .catch(err => {
        console.log('Error@Picker', err);
        err.message == 'User cancelled image selection'
          ? Snackbar.show({
              text: 'Operation cancelled by User',
            })
          : Snackbar.show({
              text: 'Error in upload',
            });
      });
  };
  return (
    <SafeAreaView style={{alignItems: 'center', marginTop: 25}}>
      <Pressable
        style={{
          height: height * 0.25,
          width: width * 0.4,
          backgroundColor: Colors.yellow_Base,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          overflow: 'hidden',
        }}
        onPress={HandleImageUpload}>
        {FormData.Image == null ? (
          <>
            <Image source={Plus} style={{height: 50, width: 50}} />
            <Text>Upload Product Image</Text>
          </>
        ) : (
          <Image
            source={{uri: FormData.Image}}
            style={{
              height: height * 0.25,
              width: width * 0.4,
              resizeMode: 'cover',
            }}
          />
        )}
      </Pressable>
      <CustomTextInput
        value={FormData.name}
        name="Product Name"
        width={width * 0.9}
        placeholder="Product Name"
        onChangeText={text => HandleText(text, 'name')}
      />
      <CustomTextInput
        value={FormData.description}
        name="Description"
        width={width * 0.9}
        placeholder="Description"
        onChangeText={text => HandleText(text, 'description')}
      />
      <CustomTextInput
        value={FormData.price}
        name="Price"
        width={width * 0.9}
        placeholder="Price"
        onChangeText={text => HandleText(text, 'price')}
      />

      <CustomButton title="Create Product" onPress={HandleCreate} />
    </SafeAreaView>
  );
};

export default AddProduct;
