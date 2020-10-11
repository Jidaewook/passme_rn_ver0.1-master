import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from "@react-navigation/stack";

import Icon from '@expo/vector-icons/Ionicons';

import HomeScreen from './main/HomeScreen';
import MypageScreen from './main/MypageScreen';
import PostScreen from './main/PostScreen';
import SearchScreen from './main/SearchScreen';
import RecommendScreen from './main/RecommendScreen/RecommendPresenter_2';
import DetailScreen from './main/DetailScreen';
import Incruit from './main/DetailBBS/Incruit';
import Mathqna from './main/DetailBBS/Mathqna';
import Solving from './main/DetailBBS/Solving';
import Highscore from './main/DetailBBS/Highscore';

const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const RecommendStack = createStackNavigator();
const SearchStack = createStackNavigator();
const IncruitStack = createStackNavigator();
const MathqnaStack = createStackNavigator();
const SolvingStack = createStackNavigator();
const HighscoreStack = createStackNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
    >
        <Tab.Screen
            name="Recommend"
            component={RecommendStackScreen}
            options={{
                tabBarLabel: 'Recommend',
                tabBarColor: '#009387',
                tabBarIcon: ({color}) => (
                    <Icon name="ios-compass" color={color} size={26} />
                )
            }}
        />

        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: '#009387',
                tabBarIcon: ({color}) => (
                    <Icon name="ios-home" color={color} size={26} />
                )
            }}
        />

        <Tab.Screen
            name="Post"
            component={PostScreen}
            options={{
                tabBarLabel: 'Post',
                tabBarColor: '#009387',
                tabBarIcon: ({color}) => (
                    <Icon name="ios-add" color={color} size={26} />
                )
            }}
        />

       

        <Tab.Screen
            name="Search"
            component={SearchStackScreen}
            options={{
                tabBarLabel: 'Search',
                tabBarColor: '#009387',
                tabBarIcon: ({color}) => (
                    <Icon name="ios-search" color={color} size={26} />
                )
            }}
        />
        
        <Tab.Screen
            name="Mypage"
            component={MypageScreen}
            options={{
                tabBarLabel: 'MyPage',
                tabBarColor: '#009387',
                tabBarIcon: ({color}) => (
                    <Icon name="ios-person" color={color} size={26} />
                )
            }}
        />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
                headerTitleStyle: {
            fontWeight: 'bold'
            }
    }}>
            <HomeStack.Screen name="Home" component={HomeScreen} options={{
                title:'Overview',
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
            <DetailStack.Screen name="DetailScreen" component={DetailScreen} options={{
                
                title: 'Detail'
            }} />
            <IncruitStack.Screen name="Incruit" component={Incruit} options={{
                title: 'Incruit'
            }} /> 
            <SearchStack.Screen name="SearchScreen" component={SearchScreen} options={{
                title: 'Search'
            }} /> 
            <MathqnaStack.Screen name="Mathqna" component={Mathqna} options={{
                title: 'Math Q&A'
            }} /> 
            <SolvingStack.Screen name="Solving" component={Solving} options={{
                title: 'Solving'
            }} />
            <HighscoreStack.Screen name="Highscore" component={Highscore} options={{
                title: 'Highscore'
            }} />
    </HomeStack.Navigator>
    );

const RecommendStackScreen = ({navigation }) => (
    <RecommendStack.Navigator>
        <RecommendStack.Screen name="Recommend" component={RecommendScreen} options={{
                title:'Recommend',
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} onPress={() => navigation.openDrawer()}></Icon.Button>
                )
        }} />
        
        <DetailStack.Screen name="DetailScreen" component={DetailScreen} options={{
                title: 'Detail'        
        }} />
    </RecommendStack.Navigator>
);

const SearchStackScreen = ({navigation}) => (
    <SearchStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
            headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <SearchStack.Screen name="SearchScreen" component={SearchScreen} options={{
                title:'Search',
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
        
    </SearchStack.Navigator>
);


    
const DetailsStackScreen = ({navigation}) => (
    <DetailsStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
    <DetailsStack.Screen name="Details" component={DetailScreen} options={{
        headerLeft: () => (
            // <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
            <Icon.Button name="caret-back-outline" size={25} backgroundColor="#1f65ff" onPress={() => navigation.HomeStackScreen()}></Icon.Button>
        )
    }} />
    </DetailsStack.Navigator>

);