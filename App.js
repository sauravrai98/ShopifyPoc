/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Image
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();



function HomeStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      // headerShown: false,
      headerStyle: { backgroundColor: '#66cc00' },
      headerTintColor: 'white',
      contentStyle: { backgroundColor: Colors.primary100 },
    }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const App = () => {
 

  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
  );
};



export default App;
