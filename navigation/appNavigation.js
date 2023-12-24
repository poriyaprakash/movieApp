import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageComponent } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';
import PersonScreen from '../screens/PersonScreen';
import SearchScreen from '../screens/SearchScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import LiveTvScreen from '../screens/LiveTvScreen';
import DownloadScreen from '../screens/DownloadScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Signup"
          options={{ headerShown: false }}
          component={SignupScreen}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={MainStackScreen}
        />
        <Stack.Screen
          name="Movie"
          options={{ headerShown: false }}
          component={MovieScreen}
        />
        <Stack.Screen
          name="Person"
          options={{ headerShown: false }}
          component={PersonScreen}
        />
        <Stack.Screen
          name="Search"
          options={{ headerShown: false }}
          component={SearchScreen}
        />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const MainStackScreen = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Movies"
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Image
            source={require("../assets/images/video.png")}
            style={{
              width: 27,
              height: 27,
              tintColor: focused ? '#9F9428' : 'gray',
            }}
          />
        ),
        tabBarLabelStyle: {
          color: 'black',
        },
      }}
      component={HomeScreen}
    />
    <Tab.Screen
      name="Live"
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Image
            source={require("../assets/images/live-streaming.png")}
            style={{
              width: 27,
              height: 27,
              tintColor: focused ? '#9F9428' : 'gray',
            }}
          />
        ),
        tabBarLabelStyle: {
          color:'black',
        },
      }}
      component={LiveTvScreen}
    />
    <Tab.Screen
      name="Search"
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Image
            source={require("../assets/images/search.png")}
            style={{
              width: 27,
              height: 27,
              tintColor: focused ? '#9F9428' : 'gray',
            }}
          />
        ),
        tabBarLabelStyle: {
          color: 'black',
        },
      }}
      component={SearchScreen}
    />
    <Tab.Screen
      name="Download"
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Image
            source={require("../assets/images/downl.png")}
            style={{
              width: 30,
              height: 30,
              tintColor: focused ? '#9F9428' : 'gray',
            }}
          />
        ),
        tabBarLabelStyle: {
          color: 'black',
        },
      }}
      component={DownloadScreen}
    />
    <Tab.Screen
      name="User"
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Image
            source={require("../assets/images/user.png")}
            style={{
              width: 27,
              height: 27,
              tintColor: focused ? '#9F9428' : 'gray',
            }}
          />
        ),
        tabBarLabelStyle: {
          color: 'black',
        },
      }}
      component={ProfileScreen}
    />
  </Tab.Navigator>
);
const styles = StyleSheet.create({});

export default AppNavigation;
