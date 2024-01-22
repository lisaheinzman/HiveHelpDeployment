import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GuidesScreen from './components/GuidesScreen';
import TasksScreen from './components/TasksScreen';
import HomeScreen from './components/HomeScreen';
import CalendarScreen from './components/CalendarScreen';
import ProfileScreen from './components/ProfileScreen';
import SettingsScreen from './components/SettingsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const App = () => {
  const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Guides" component={GuidesScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Tasks" component={TasksScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Calendar" component={CalendarScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false}}/>
    </Stack.Navigator>
  );}
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Guides" component={GuidesScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Tasks" component={TasksScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Home" component={MainStack} options={{ headerShown: false }} />
        <Tab.Screen name="Calendar" component={CalendarScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App