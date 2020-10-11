import React from 'react';

import {createStackNavigator}  from "@react-navigation/stack"; 

import SplashScreen from './auth/SplashScreen';
import SignupScreen from './auth/SignupScreen';
import SigninScreen from './auth/SigninScreen';
import ForgotpasswordScreen from './auth/ForgotpasswordScreen';
import DetailScreen from './main/DetailScreen';
import Home from "./main/HomeScreen";
import SearchScreen from './main/SearchScreen';
import Incruit from './main/DetailBBS/Incruit';
import Mathqna from './main/DetailBBS/Mathqna';
import Solving from './main/DetailBBS/Solving';
import Highscore from './main/DetailBBS/Highscore';
import NoticeScreen from './main/ContentBBS/Notice';

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
        <RootStack.Screen name="SearchScreen" component={SearchScreen} />
        <RootStack.Screen name="Incruit" component={Incruit} />
        <RootStack.Screen name="Mathqna" component={Mathqna} />
        <RootStack.Screen name="Solving" component={Solving} />
        <RootStack.Screen name="Highscore" component={Highscore} />

        {/* Drawer */}
        <RootStack.Screen name="NoticeScreen" component={NoticeScreen} />

    </RootStack.Navigator>
);

export default RootStackScreen;