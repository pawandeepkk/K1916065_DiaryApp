import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import NewDiaryEntry from './src/screens/NewDiaryEntry';
import History from './src/screens/History';

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
           name="NewDiaryEntry"
           component={NewDiaryEntry}
           options={{ title: "New Diary Entry" }}
         />
         <Stack.Screen 
           name="History"
           component={History}
           options={{ title: "History" }}
         />
       </Stack.Navigator>
     </NavigationContainer>
   );
 }

export default App;
