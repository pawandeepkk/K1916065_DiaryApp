import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 import { TabRouter } from 'react-navigation';
 import IndexScreen from '../screens/IndexScreen';
 import NewDiaryEntry from '../screens/NewDiaryEntry';
 import History from '../screens/History';
 import { FontAwesome5 } from '@expo/vector-icons';
 import { Entypo } from '@expo/vector-icons';

 const Tab = createMaterialBottomTabNavigator();

 const NavBar = () => {
     return (
         <Tab.Navigator initialRouteName="Home"
         activeColor="white"
         barStyle={{ backgroundColor: 'tomato' }}
         >
             <Tab.Screen 
                name="Home" 
                component={IndexScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="home" size={24} color={color} />
                    ),
                }}
                 />
             <Tab.Screen 
                name="New Entry" 
                component={NewDiaryEntry}
                options={{
                    tabBarLabel: "New Entry",
                    tabBarIcon: ({ color }) => (
                        <Entypo name="new-message" size={24} color={color} />
                    ),
                }}
            />
             <Tab.Screen 
                name="History" 
                component={History} 
                options={{
                    tabBarLabel: 'History',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="history" size={24} color={color} />
                    ),
                }}
            />
         </Tab.Navigator>
     );
 }

 export default NavBar; 