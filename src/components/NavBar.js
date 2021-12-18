import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
 import IndexScreen from '../screens/IndexScreen';
 import NewDiaryEntry from '../screens/NewDiaryEntry';
 import History from '../screens/History';
 import { FontAwesome5 } from '@expo/vector-icons';
 import { Entypo } from '@expo/vector-icons';


 const IndexStack = createNativeStackNavigator();
 const NewDiaryEntryStack = createNativeStackNavigator();
 const HistoryStack = createNativeStackNavigator();
 const Tab = createMaterialBottomTabNavigator();

 const NavBar = () =>  {
     return (
         <Tab.Navigator 
         initialRouteName="Index"
         activeColor="white"
         >
             <Tab.Screen 
                name="Home" 
                component={IndexStackScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarColor: "#565bfc",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="home" size={24} color={color} />
                    ),
                }}
                 />
             <Tab.Screen 
                name="New Entry" 
                component={NewDiaryEntryStackScreen}
                options={{
                    tabBarLabel: "New Entry",
                    tabBarColor: "#1f65ff",
                    tabBarIcon: ({ color }) => (
                        <Entypo name="new-message" size={24} color={color} />
                    ),
                }}
            />
             <Tab.Screen
                name="History" 
                component={HistoryStackScreen} 
                options={{
                    tabBarLabel: 'History',
                    tabBarColor: "red",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="history" size={24} color={color} />
                    ),
                }}
            />
         </Tab.Navigator>
     );
}

 export default NavBar; 

 const IndexStackScreen = ({navigation}) => (
    <IndexStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#565bfc',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontFamily: 'ChalkboardSE-Bold',
        fontWeight: 'bold',
        fontSize: '35',
      }
    }}>
      <IndexStack.Screen 
        name="Index" 
        component={IndexScreen} 
        options={{ 
          title: "Home" 
        }} />
    </IndexStack.Navigator>
  );

  const NewDiaryEntryStackScreen = ({navigation}) => (
    <NewDiaryEntryStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#1f65ff',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontFamily: 'ChalkboardSE-Bold',
            fontWeight: "bold",
            fontSize: '35',
        }
    }}>
        <NewDiaryEntryStack.Screen name="New Entry" component={NewDiaryEntry} />
  
  </NewDiaryEntryStack.Navigator>
  );

  const HistoryStackScreen = ({navigation}) => (
    <HistoryStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#fca103',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontFamily: 'ChalkboardSE-Bold',
            fontWeight: "bold",
            fontSize: '35',
        }
    }}>
        <HistoryStack.Screen name="History" component={History} />
  
  </HistoryStack.Navigator>
  );
  