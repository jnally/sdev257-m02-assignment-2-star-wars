// Jeremy Nally - Module 03 Assignment 2 - Star Wars API (previously Module 02 Assignment 2 - Star Wars)
// Main entry point - set platform specific navigation
import 'react-native-gesture-handler';
import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import PlanetsScreen from './screens/PlanetsScreen';
import FilmsScreen from './screens/FilmsScreen';
import SpaceshipsScreen from './screens/SpaceshipsScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const isAndroid = Platform.OS === 'android';

  // Build navigation
  return (
    <NavigationContainer>
      {isAndroid ? (
        <Drawer.Navigator initialRouteName="Planets">
          <Drawer.Screen name="Planets" component={PlanetsScreen} />
          <Drawer.Screen name="Films" component={FilmsScreen} />
          <Drawer.Screen name="Spaceships" component={SpaceshipsScreen} />
        </Drawer.Navigator>
      ) : (
        <Tab.Navigator initialRouteName="Planets">
          <Tab.Screen name="Planets" component={PlanetsScreen} />
          <Tab.Screen name="Films" component={FilmsScreen} />
          <Tab.Screen name="Spaceships" component={SpaceshipsScreen} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}