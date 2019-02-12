import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import { STYLES } from './constants';
import HomeScreen from './screens/HomeScreen';
import CreateInvitationScreen from './screens/CreateInvitationScreen';
import AccommodationScreen from './screens/AccommodationScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  About: AboutScreen,
  Contact: ContactScreen,
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTitle: 'Siham & German',
  },
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Accommodations: AccommodationScreen,
  CreateInvitation: CreateInvitationScreen,
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: ({ navigation }) => {
    return {
      tabBarOptions: {
        showLabel: false,
        activeTintColor: STYLES.COLORS.LIGHT_RED,
        inactiveTintColor: STYLES.COLORS.LIGHT_DARK,
        style: {
          backgroundColor: STYLES.COLORS.WHITE
        },
      },
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        let pathTo;

        if (routeName === 'Home') {
          pathTo = 'Home';
          iconName = 'home';
        } else if (routeName === 'Accommodations') {
          pathTo = 'Accommodations';
          iconName = 'hotel';
        } else if (routeName === 'CreateInvitation') {
          pathTo = 'CreateInvitation';
          iconName = 'envelope-o';
        }
        // You can return any component that you like here!
        return (
          <TouchableNativeFeedback onPress={() => navigation.navigate(pathTo)}>
            <FontAwesome name={iconName} size={28} color={tintColor} />
          </TouchableNativeFeedback>
        );
      },
    }
  }
});

export default createAppContainer(TabNavigator);
