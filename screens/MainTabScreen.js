import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from "@react-navigation/stack";

import Icon from '@expo/vector-icons/Ionicons';

import HomeScreen from './main/HomeScreen';
import MypageScreen from './main/MypageScreen';
import PostScreen from './main/PostScreen';
import SearchScreen from './main/SearchScreen';
import RecommendScreen from './main/RecommendScreen';


const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
    >
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
            name="Recommend"
            component={RecommendScreen}
            options={{
                tabBarLabel: 'Recommend',
                tabBarColor: '#009387',
                tabBarIcon: ({color}) => (
                    <Icon name="ios-compass" color={color} size={26} />
                )
            }}
        />

        <Tab.Screen
            name="Search"
            component={SearchScreen}
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

        {/* <Tab.Screen
            name="Detail"
            component={DetailsStackScreen}
            options={{
                tabBarLabel: 'Detail',
                tabBarColor: '#009387',
                tabBarIcon: ({color}) => (
                    <Icon name="ios-person" color={color} size={26} />
                )
            }}
        /> */}

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
    </HomeStack.Navigator>
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
    <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
    }} />
    </DetailsStack.Navigator>

);