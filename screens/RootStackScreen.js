import React from 'react';

import {createStackNavigator}  from "@react-navigation/stack"; 

import SplashScreen from './auth/SplashScreen';
import SignupScreen from './auth/SignupScreen';
import SigninScreen from './auth/SigninScreen';
import ForgotpasswordScreen from './auth/ForgotpasswordScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />

                <RootStack.Screen name="SigninScreen" component={SigninScreen} />

        <RootStack.Screen name="SignupScreen" component={SignupScreen} />
        <RootStack.Screen name="ForgotpasswordScreen" component={ForgotpasswordScreen} />

    </RootStack.Navigator>

);

export default RootStackScreen;