
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import RootStackScreen from './screens/RootStackScreen';
import MainTabScreen from './screens/MainTabScreen';

import DrawerContents from './screens/main/DrawerContents';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* 루트를 풀고, 사이드를 띄우면 포갓 패스워드까지 갈 수 있다. */}
      <RootStackScreen />
      {/* <Drawer.Navigator drawerContent={props => <DrawerContents {...props} />}>

        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />


      </Drawer.Navigator> */}
    </NavigationContainer>

  );
}


