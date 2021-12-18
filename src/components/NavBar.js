import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 import { TabRouter } from 'react-navigation';
 import IndexScreen from '../screens/IndexScreen';
 import NewDiaryEntry from '../screens/NewDiaryEntry';
 import History from '../screens/History';

 const Tab = createMaterialBottomTabNavigator();

 const NavBar = () => {
     return (
         <Tab.Navigator initialRouteName="Feed"
         activeColor="#e91e63"
         barStyle={{ backgroundColor: 'grey' }}>
             <Tab.Screen name="Home" component={IndexScreen} />
             <Tab.Screen name="New Entry" component={NewDiaryEntry} />
             <Tab.Screen name="History" component={History} />
         </Tab.Navigator>
     );
 }

 export default NavBar; 