import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import ScreenOne from './src/screens/ScreenOne';
 import ScreenTwo from './src/screens/ScreenTwo';

 const Stack = createNativeStackNavigator();

 const App = () => {
   return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName ="Index">
         <Stack.Screen 
           name="Index"
           component={IndexScreen}
           options={{ title: "Reading Diary" }}
         />
         <Stack.Screen 
           name="ScreenOne"
           component={ScreenOne}
           options={{ title: "Screen 1" }}
         />
         <Stack.Screen 
           name="ScreenTwo"
           component={ScreenTwo}
           options={{ title: "Screen 2" }}
         />
       </Stack.Navigator>
     </NavigationContainer>
   );
 }

export default App;
