import React, {useEffect, useRef} from 'react';
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Tabs/homeTab/Home';
import CategoriesScreen from '../screens/Tabs/categoryTab/Categories';
import FavouriteScreen from '../screens/Tabs/favouriteTab/Favourite';
import MoreScreen from '../screens/Tabs/moreTab/More';
import Feather from 'react-native-vector-icons/Feather';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator();

const Tabs = [
  {route: 'Home', component: HomeScreen, icon: 'home'},
  {route: 'Categories', component: CategoriesScreen, icon: 'grid'},
  {route: 'Favourite', component: FavouriteScreen, icon: 'heart'},
  {route: 'More', component: MoreScreen, icon: 'more-vertical'},
];

const animate1 = {
  0: {scale: 0.5, translateY: 7},
  0.92: {translateY: -34},
  1: {scale: 1.1, translateY: -20},
};
const animate2 = {
  0: {scale: 1.2, translateY: -24},
  1: {scale: 1, translateY: 1},
};

const TabButton = (props: any) => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState?.selected;
  const viewRef = useRef<any>(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      // circleRef.current.animate(circle1);
    } else {
      viewRef.current.animate(animate2);
      // circleRef.current.animate(circle2);
    }
  }, [focused]);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={onPress}>
      {/* <View style={styles.container}>
        <Feather
          name={item.icon}
          size={25}
          color={focused ? Colors.activeIconTintColor : 'gray'}
        />
        <Text style={styles.text}>{item.route}</Text>
      </View> */}
      <Animatable.View ref={viewRef} duration={500} style={styles.container}>
        <View style={styles.btn}>
          <View style={focused && styles.circle} />
          <Feather
            name={item.icon}
            size={25}
            color={focused ? Colors.activeIconTintColor : 'gray'}
          />
        </View>
        <Text style={styles.text}>{focused ? '' : item.route}</Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      {Tabs.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarButton: (props: BottomTabBarButtonProps) => (
                <TabButton {...props} item={item} />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    // borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
  },
  focused: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{translateY: -20}],
    backgroundColor: Colors.activeIconBackgroundColor,
    borderRadius: 999,
    padding: 10,
    width: '50%',
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.activeIconBackgroundColor,
    borderRadius: 25,
  },
  circleActive: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
  },
  tabBar: {
    // height: 80,
  },
});

export default TabNavigator;
