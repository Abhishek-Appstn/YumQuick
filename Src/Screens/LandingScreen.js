import { Text, SafeAreaView, StyleSheet, ImageBackground, Image, View } from 'react-native'
import React from 'react'
import colors from '../Global/Colors'
import CustomButton from '../Common/customButton'
import { useNavigation } from '@react-navigation/native'
import Dimensions from '../Global/Dimensions'
import { YumQuick_Logo } from '../assets/Images'
const { height, width } = Dimensions

const LandingScreen = () => {
  const navigation = useNavigation()
  const handleNavigation = (path) => {
    navigation.navigate(path)
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems:'center',marginVertical:height*.07}}>

      <Image style={styles.Image} source={YumQuick_Logo} />
      <View style={styles.TextView}>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:30,color:colors.yellow_Base,marginVertical:height*.03}}>YUM<Text style={{color:colors.White_1}}>QUICK</Text></Text>
        <Text style={styles.SubText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</Text>
      </View>
      <View style={styles.buttonView}>
        <CustomButton  buttonColor={colors.yellow_Base} textColor={colors.orange_Base} title="Log In" onPress={() => handleNavigation('Login')} />
        <CustomButton height={height * .06} buttonColor={colors.yellow} textColor={colors.orange_Base} title="Sign Up" onPress={() => handleNavigation('Signup')}/>
      </View>
      </View>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
height:height,
    backgroundColor: colors.login_BG,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  TextView: {
    width: width * .7
  },
  Image: {
    height: height * .25,
    resizeMode: 'contain'
  },
  SubText: {
    textAlign: 'center', color: colors.White_1, fontSize: 14, fontFamily: 'LeagueSpartan-Regular'
  }, buttonView: {
    marginVertical: height*.05
  }
})

export default LandingScreen