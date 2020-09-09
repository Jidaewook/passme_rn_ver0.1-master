import React from 'react';

import {createStackNavigator}  from "@react-navigation/stack"; 

import SplashScreen from './auth/SplashScreen';
import SignupScreen from './auth/SignupScreen';
import SigninScreen from './auth/SigninScreen';
import ForgotpasswordScreen from './auth/ForgotpasswordScreen';
import DetailScreen from './main/DetailScreen';
import Home from "./main/HomeScreen";
import Search from './main/SearchScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SignupScreen" component={SignupScreen} />

        <RootStack.Screen name="SplashScreen" component={SplashScreen} />

        <RootStack.Screen name="SigninScreen" component={SigninScreen} />

        <RootStack.Screen name="ForgotpasswordScreen" component={ForgotpasswordScreen} />
        {/* Main */}
        <RootStack.Screen name="HomeScreen" component={Home}   />
        <RootStack.Screen name="DetailScreen" component={DetailScreen} />
        <RootStack.Screen name="SearchScreen" component={Search} />
    </RootStack.Navigator>

    

);

export default RootStackScreen;