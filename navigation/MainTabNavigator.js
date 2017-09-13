import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import FavScreen from '../screens/FavScreen';
import InterestsScreen from '../screens/InterestsScreen';
import ProfileScreen from '../screens/ProfileScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Search: {
      screen: SearchScreen,
    },
    Fav: {
      screen: FavScreen,
    },
    Interests: {
      screen: InterestsScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = Platform.OS === 'ios'
              ? `ios-home${focused ? '' : '-outline'}`
              : 'md-home';
            break;
          case 'Search':
            iconName = Platform.OS === 'ios'
              ? `ios-search${focused ? '' : '-outline'}`
              : 'md-search';
            break;
          case 'Fav':
            iconName = Platform.OS === 'ios'
              ? `ios-heart${focused ? '' : '-outline'}`
              : 'md-heart';
            break;
          case 'Interests':
            iconName = Platform.OS === 'ios'
              ? `ios-albums${focused ? '' : '-outline'}`
              : 'md-albums';
            break;
          case 'Profile':
            iconName = Platform.OS === 'ios'
              ? `ios-person${focused ? '' : '-outline'}`
              : 'md-person';
            break;
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  }
);
