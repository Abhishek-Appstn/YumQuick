import {View, Text, SafeAreaView} from 'react-native';
import React, { useEffect } from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './Src/Screens/Splash';
import LandingScreen from './Src/Screens/LandingScreen';
import Login from './Src/Screens/Login';
import Signup from './Src/Screens/SignUp';
import SetPassword from './Src/Screens/SetPassword';
import SetFingerprint from './Src/Screens/setFingerprint';
import Home from './Src/Screens/Home';
import { createDrawerNavigator, useDrawerStatus } from '@react-navigation/drawer';
import CustomDrawer from './Src/Screens/Drawer';
import Dimensions from './Src/Global/Dimensions';
import Orders from './Src/Screens/Orders';
import CancelOrders from './Src/Screens/Cancelorder';
import Confirmation from './Src/Screens/Confirmation';
import Review from './Src/Screens/Review';
import Profile from './Src/Screens/Profile';
import AddressSelection from './Src/Screens/AddressSelection';
import AddAddress from './Src/Screens/AddAddress';
import PaymentMethod from './Src/Screens/PaymentMethod';
import AddNewCard from './Src/Screens/AddNewCard';
import ContactUs from './Src/Screens/ContactUs';
import Settings from './Src/Screens/Settings';
import NotificationSettings from './Src/Screens/NotificationSettings';
import ChangePassword from './Src/Screens/ChangePassword';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomBottomTab from './Src/Common/CustomBottomTab';
import ProductPage from './Src/Screens/ProductPage';
import ConfirmOrder from './Src/Screens/ConfirmOrder';
import Payment from './Src/Screens/Payment';
import BestSeller from './Src/Common/BestSeller';
import DeliveryTime from './Src/Screens/deliveryTime';
import ItemFilter from './Src/Screens/ItemFilter';
import Recomendations from './Src/Screens/Recomendations';
import Help from './Src/Screens/Help';
import OrderDetails from './Src/Screens/OrderDetails';
import LiveTracking from './Src/Screens/LiveTracking';
import History from './Src/Screens/History';
import Favourites from './Src/Screens/Favourites';
import OnboardingScreen from './Src/Screens/OnboardingScreen';
const {height,width}=Dimensions
const App = () => {
  const stack = createStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="Splash" component={Splash} />
        <stack.Screen name="landingPage" component={LandingScreen} />
      <stack.Screen name="Drawer" component={DrawerNavigator} />
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Signup" component={Signup} />
        <stack.Screen name="setPassword" component={SetPassword} />
        <stack.Screen name="setFingerprint" component={SetFingerprint} />
    <stack.Screen name='Confirmation' component={Confirmation}/>
    <stack.Screen name='Review' component={Review}/>
    <stack.Screen name='Profile' component={Profile}/>
    <stack.Screen name='AddressSelection' component={AddressSelection}/>
    <stack.Screen name='AddAddress' component={AddAddress}/>
    <stack.Screen name='PaymentMethod' component={PaymentMethod}/>
    <stack.Screen name='AddNewCard' component={AddNewCard}/>
    <stack.Screen name='ContactUs' component={ContactUs}/>
    <stack.Screen name='Settings' component={Settings}/>
    <stack.Screen name='NotificationSettings' component={NotificationSettings}/>
    <stack.Screen name='ChangePassword' component={ChangePassword}/>
    <stack.Screen name='OnboardingScreem' component={OnboardingScreen}/>


    
      </stack.Navigator>
    </NavigationContainer>

  );
};
const DrawerNavigator=()=>{
  const Drawer=createDrawerNavigator()
  return(
    <Drawer.Navigator screenOptions={{headerShown:false,drawerHideStatusBarOnOpen:true,drawerPosition:'right',drawerType:'front',drawerStyle:{borderTopLeftRadius:width*.2,borderBottomLeftRadius:width*.2,overflow:'hidden',width:width*.84}}} drawerContent={(props) => <CustomDrawer {...props} />}>
    <Drawer.Screen name='Home' component={FooterNavigator}/>
    <Drawer.Screen name='Orders' component={Orders}/>
    <Drawer.Screen name='CancelOrder' component={CancelOrders}/>
    <Drawer.Screen name='Confirmation' component={Confirmation}/>
    <Drawer.Screen name='HelpPage' component={Help}/>

    </Drawer.Navigator>
  )
}

const FooterNavigator=()=>{
  const Footer=createBottomTabNavigator()
  return(
    <Footer.Navigator  screenOptions={{headerShown:false}}tabBar={(props)=><CustomBottomTab/>}>
      <Footer.Screen name='Dashboard' component={Home}/>
      <Footer.Screen name='ProductPage' component={ProductPage}/>
      <Footer.Screen name='ConfirmOrder' component={ConfirmOrder}/>
      <Footer.Screen name='Payment' component={Payment}/>
      <Footer.Screen name='Delivery Time' component={DeliveryTime}/>
      <Footer.Screen name='Best Seller' component={BestSeller}/>
      <Footer.Screen name='Filter' component={ItemFilter}/>
      <Footer.Screen name='Recomendations' component={Recomendations}/>
      <Footer.Screen name='OrderDetails' component={OrderDetails}/>
      <Footer.Screen name='LiveTracking' component={LiveTracking}/>
      <Footer.Screen name='History' component={History}/>
      <Footer.Screen name='Favorites' component={Favourites}/>


      
      

      





      

    </Footer.Navigator>
  )
}

export default App;
