import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './src/screens/Index';
import NewDiaryEntry from './src/screens/NewDiaryEntry';
import History from './src/screens/History';
import ViewHistoryItem from './src/screens/ViewHistoryItem';
import { ItemProvider } from './src/contexts/ItemContext';
import EditItemScreen from './src/screens/EditItemScreen';
import CameraScreen from './src/screens/CameraScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ItemProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName ="Index">
          <Stack.Screen 
            name="Index"
            component={Index}
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
          <Stack.Screen 
            name="ViewHistoryItem"
            component={ViewHistoryItem}
            options={{ title: "View Item" }}
          />
          <Stack.Screen 
            name="Edit"
            component={EditItemScreen}
            options={{ title: "Edit" }}
          />
          <Stack.Screen 
            name="Camera"
            component={CameraScreen}
            options={{ title: "Take a picture of your book!" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ItemProvider>
  );
 }

export default App;
