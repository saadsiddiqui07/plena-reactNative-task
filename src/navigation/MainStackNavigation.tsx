import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import DetailsScreen from '../screens/Stack/Details';
import CartScreen from '../screens/Stack/Cart';

const Stack = createStackNavigator();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        key={'Main'}
        name="Main"
        component={TabNavigator}
        options={{
          headerShown: false,
          headerShadowVisible: false,
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
