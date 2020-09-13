
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import RootStackScreen from './screens/RootStackScreen';
import MainTabScreen from './screens/MainTabScreen';
import DetailScreen from './screens/main/DetailScreen';
import DrawerContents from './screens/main/DrawerContents';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* 루트를 풀고, 사이드를 띄우면 포갓 패스워드까지 갈 수 있다. */}
      <RootStackScreen />
      {/* <Drawer.Navigator drawerContent={props => <DrawerContents {...props} />}>
        
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        
      </Drawer.Navigator>  */}
      {/* <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={MainTabScreen}
            
          />
          <Stack.Screen 
            name="Detail"
            component={DetailScreen}
          />
        </Stack.Navigator> */}
    </NavigationContainer>

  );
}


