import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigation from './src/navigation/MainStackNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ViewStyle} from 'react-native';

const mainStyle: ViewStyle = {
  flex: 1,
};

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={mainStyle}>
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
