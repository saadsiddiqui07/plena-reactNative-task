import React from 'react';
import TabNavigator from './TabNavigator';
import DetailsScreen from '../screens/Stack/details/Details';
import CartScreen from '../screens/Stack/cart/Cart';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

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
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerShown: false,
          headerShadowVisible: false,
          headerTransparent: true,
          animation: 'slide_from_right',
          animationTypeForReplace: 'push',
        }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          headerShadowVisible: false,
          headerTransparent: true,
          animation: 'slide_from_right',
          animationTypeForReplace: 'push',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
