import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Tabs/homeTab/Home';
import CategoriesScreen from '../screens/Tabs/categoryTab/Categories';
import FavouriteScreen from '../screens/Tabs/favouriteTab/Favourite';
import MoreScreen from '../screens/Tabs/moreTab/More';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: () => <Ionicons name="home" size={20} color={'black'} />,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="apps-outline" size={20} color={'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="heart-outline" size={20} color={'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name="ellipsis-vertical-outline"
              size={20}
              color={'black'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
