import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer, StackActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import zipCodeScreen from './screen/ZipCoreScreen';
import WeatherScreen from './screen/WeatherScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={zipCodeScreen}/>
        <Stack.Screen name="Weather" component={WeatherScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
