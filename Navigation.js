import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import { AccommodationStack } from './components/navigations/AccommodationStack';

const MainNavigator = createStackNavigator({
  Home: HomeScreen,
  About: AboutScreen,
  Contact: ContactScreen,
  Accommodation: AccommodationStack,
}, {
  initialRouteName: 'Home',
});

export default createAppContainer(MainNavigator);
