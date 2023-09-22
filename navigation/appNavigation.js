/* eslint-disable prettier/prettier */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View, Image, ImageComponent} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';
import PersonScreen from '../screens/PersonScreen';
import SearchScreen from '../screens/SearchScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import LiveTvScreen from '../screens/LiveTvScreen';
import DownloadScreen from '../screens/DownloadScreen';
import Icon from 'react-native-vector-icons/FontAwesome'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // screenOptions={({route}) => ({
        //   tabBarIcon: ({color, size}) => {
        //     let iconName;
        //     // let size = size;
        //     color = '#000';
        //     if (route.name === 'Movies') {
        //       iconName = 'camera-movie'; // Icon name for "Movies"
        //     } else if (route.name === 'Live') {
        //       iconName = 'video-camera'; // Icon name for "Live TV"
        //     } else if (route.name === 'Search') {
        //       iconName = 'search'; // Icon name for "NLive"
        //     } else if (route.name === 'User') {
        //       iconName = 'user'; // Icon name for "User Profile"
        //     } else if (route.name === 'Download') {
        //       iconName = 'user'; // Icon name for "User Profile"
        //     }
            
        //     return <Icon name={iconName} size={size} color={color} />;
        //   },
        // })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="Movies"
          options={{headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("../assets/images/video.png")}
                style={{
                  width: 27,
                  height: 27,
                  tintColor: focused ? 'blue' : 'gray',
                }}
              />
            ),
          }}
          component={MainStackScreen}
        />
        <Tab.Screen
          name="Live"
          options={{headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("../assets/images/live-streaming.png")}
                style={{
                  width: 27,
                  height: 27,
                  tintColor: focused ? 'blue' : 'gray',
                }}
              />
            ),}}
          component={LiveTvScreen}
        />
        <Tab.Screen
          name="Search"
          options={{headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("../assets/images/search.png")}
                style={{
                  width: 27,
                  height: 27,
                  tintColor: focused ? 'blue' : 'gray',
                }}
              />
            ),}}
          component={SearchScreen}
        />
        <Tab.Screen
          name="Download"
          options={{headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("../assets/images/downl.png")}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? 'blue' : 'gray',
                }}
              />
            ),}}
          component={DownloadScreen}
        />
        <Tab.Screen
          name="User"
          options={{headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("../assets/images/user.png")}
                style={{
                  width: 27,
                  height: 27,
                  tintColor: focused ? 'blue' : 'gray',
                }}
              />
            ),}}
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
