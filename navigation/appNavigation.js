import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';
import PersonScreen from '../screens/PersonScreen';
import SearchScreen from '../screens/SearchScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation=()=>{
  return (
    // <NavigationContainer>
    //     <Stack.Navigator>
    //         <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
    //         <Stack.Screen name="Movie" options={{headerShown:false}} component={MovieScreen} />
    //         <Stack.Screen name="Person" options={{headerShown:false}} component={PersonScreen} />
    //         <Stack.Screen name="Search" options={{headerShown:false}} component={SearchScreen} />
    //     </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          return (
            <Image
              source={require('../assets/images/video.png')}
              style={{ width: size*1.13, height: size*1.13, tintColor: color }}
            />
          );
        },
      })}
      >
        <Tab.Screen name="Movies" options={{headerShown:false}} component={MainStackScreen} />
        <Tab.Screen name="Live" options={{headerShown:false}} component={MovieScreen} />
        <Tab.Screen name="NLive" options={{headerShown:false}} component={MovieScreen} />
        <Tab.Screen name="User" options={{headerShown:false}} component={MovieScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
const MainStackScreen = () => (
  <Stack.Navigator>
      <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
      <Stack.Screen name="Movie" options={{headerShown:false}} component={MovieScreen} />
      <Stack.Screen name="Person" options={{headerShown:false}} component={PersonScreen} />
      <Stack.Screen name="Search" options={{headerShown:false}} component={SearchScreen} />
  </Stack.Navigator>
);
const styles = StyleSheet.create({
  
});

export default AppNavigation;
