/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './Src/Common/PageHeader';
import PageHeader from './Src/Common/PageHeader';
import Home from './Src/Screens/Home';
import Drawer from './Src/Screens/Drawer';
import Orders from './Src/Screens/Orders';
import Animation from './Src/Screens/Animation';
import Review from './Src/Screens/Review';
import Splash from './Src/Screens/Splash';

AppRegistry.registerComponent(appName, () => App);
