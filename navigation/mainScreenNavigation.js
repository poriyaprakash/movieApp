import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import AppNavigation from './appNavigation';
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';
import PersonScreen from '../screens/PersonScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator();

const MainScreenNavigation=()=>{
    return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="Login"
            options={{headerShown: false}}
            component={LoginScreen}
            />
            <Stack.Screen
            name="Signup"
            options={{headerShown: false}}
            component={SignupScreen}
            />
            <Stack.Screen
            name="HomePage  "
            options={{headerShown: false}}
            component={HomePage}
            />
        </Stack.Navigator>
    </NavigationContainer>
    )
}
const HomePage=()=>{
    return (
    <NavigationContainer>
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
    </NavigationContainer>
    )
}
const styles = StyleSheet.create({
  
});

export default MainScreenNavigation;
