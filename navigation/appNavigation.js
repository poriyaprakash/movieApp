/* eslint-disable prettier/prettier */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';
import PersonScreen from '../screens/PersonScreen';
import SearchScreen from '../screens/SearchScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'; // Replace 'FontAwesome' with the icon library of your choice
import ProfileScreen from '../screens/ProfileScreen';
import LiveTvScreen from '../screens/LiveTvScreen';
import DownloadScreen from '../screens/DownloadScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;
            // let size = 30;
            // color = '#000';
            if (route.name === 'Movies') {
              iconName = 'film'; // Icon name for "Movies"
            } else if (route.name === 'Live') {
              iconName = 'video-camera'; // Icon name for "Live TV"
            } else if (route.name === 'Search') {
              iconName = 'search'; // Icon name for "NLive"
            } else if (route.name === 'User') {
              iconName = 'user'; // Icon name for "User Profile"
            } else if (route.name === 'Download') {
              iconName = 'user'; // Icon name for "User Profile"
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="Movies"
          options={{headerShown: false}}
          component={MainStackScreen}
        />
        <Tab.Screen
          name="Live"
          options={{headerShown: false}}
          component={LiveTvScreen}
        />
        <Tab.Screen
          name="Search"
          options={{headerShown: false}}
          component={SearchScreen}
        />
        <Tab.Screen
          name="Download"
          options={{headerShown: false}}
          component={DownloadScreen}
        />
        <Tab.Screen
          name="User"
          options={{headerShown: false}}
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const MainStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      options={{headerShown: false}}
      component={HomeScreen}
    />
    <Stack.Screen
      name="Movie"
      options={{headerShown: false}}
      component={MovieScreen}
    />
    <Stack.Screen
      name="Person"
      options={{headerShown: false}}
      component={PersonScreen}
    />
    <Stack.Screen
      name="Search"
      options={{headerShown: false}}
      component={SearchScreen}
    />
  </Stack.Navigator>
);
const styles = StyleSheet.create({});

export default AppNavigation;
