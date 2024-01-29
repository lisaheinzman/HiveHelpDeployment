import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HexagonIcon from './assets/hexagonicon';

import GuidesScreen from './components/GuidesScreen';
import TasksScreen from './components/TasksScreen';
import HomeScreen from './components/HomeScreen';
import CalendarScreen from './components/CalendarScreen';
import ProfileScreen from './components/ProfileScreen';
import SettingsScreen from './components/SettingsScreen';
import SignInScreen from './components/SignInScreen';
import CreateAccountScreen from './components/CreateAccountScreen';
import TaskDetailsScreen from './components/TaskDetailsScreen';

import homeIcon from './assets/icons/home-icon.png';
import guidesIcon from './assets/icons/guides-icon.png';
import tasksIcon from './assets/icons/tasks-icon.png';
import calendarIcon from './assets/icons/calendar-icon.png';
import profileIcon from './assets/icons/profile-icon.png';

const App = () => {

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const getIconSize = (routeName) => {
    // Define aspect ratios for each tab icon
    const aspectRatioMap = {
      Home: { width: 70, height: 70 }, // Adjust these values based on the aspect ratio of your Home icon
      Guides: { width: 35, height: 46 }, // Adjust these values based on the aspect ratio of your Guides icon
      Tasks: { width: 35, height: 46 }, // Adjust these values based on the aspect ratio of your Tasks icon
      Calendar: { width: 58, height: 45 }, // Adjust these values based on the aspect ratio of your Calendar icon
      Profile: { width: 38, height: 45 }, // Adjust these values based on the aspect ratio of your Profile icon
    };

    const aspectRatio = aspectRatioMap[routeName] || { width: 25, height: 25 }; // Default aspect ratio is 1:1

    return {
      width: aspectRatio.width,
      height: aspectRatio.height,
    };
  };
  const MainStack = () => {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Guides" component={GuidesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Tasks" component={TasksScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Calendar" component={CalendarScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const iconSize = getIconSize(route.name);

            let iconComponent;

            if (route.name === 'Home') {
              iconComponent = (
                <React.Fragment>
                  {/* Display Home icon on top of HexagonIcon */}
                  <HexagonIcon size={size} color={color} style={{ position: 'absolute', top: 10, alignSelf: 'center' }} />
                  <Image source={homeIcon} style={{ width: iconSize.width, height: iconSize.height, tintColor: color, position: 'absolute', top: -10, alignSelf: 'center' }} />
                </React.Fragment>
              );
            } else if (route.name === 'Guides') {
              iconComponent = <Image source={guidesIcon} style={{ width: iconSize.width, height: iconSize.height, tintColor: color, alignSelf: 'center', position: 'absolute', top: 15, }} />;
            } else if (route.name === 'Tasks') {
              iconComponent = <Image source={tasksIcon} style={{ width: iconSize.width, height: iconSize.height, tintColor: color, alignSelf: 'center', position: 'absolute', top: 15, left: 20 }} />;
            } else if (route.name === 'Calendar') {
              iconComponent = <Image source={calendarIcon} style={{ width: iconSize.width, height: iconSize.height, tintColor: color, alignSelf: 'center', position: 'absolute', top: 15, left: 20 }} />;
            } else if (route.name === 'Profile') {
              iconComponent = <Image source={profileIcon} style={{ width: iconSize.width, height: iconSize.height, tintColor: color, alignSelf: 'center', position: 'absolute', top: 15 }} />;
            }

            return iconComponent;
          },
        })}

        tabBarOptions={{
          labelStyle: {
            display: 'none',
          },
          style: {
            height: 90,
            paddingTop: 20,
          },
          tabStyle: {
            flexDirection: 'column',
            justifyContent: 'flex-end',
          },
        }}
      >
        <Tab.Screen name="Guides" component={GuidesScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Tasks" component={TasksScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Home" component={MainStack} options={{ headerShown: false }} />
        <Tab.Screen name="Calendar" component={CalendarScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
