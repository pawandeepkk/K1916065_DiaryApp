import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewDiaryEntry from './src/screens/NewDiaryEntry';
import History from './src/screens/History';
import ViewHistoryItem from './src/screens/ViewHistoryItem';
import { ItemProvider } from './src/contexts/ItemContext';
import EditItemScreen from './src/screens/EditItemScreen';
import CameraScreen from './src/screens/CameraScreen';
import StoredPictures from './src/screens/StoredPictures';
import NavBar from './src/components/NavBar';


const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <ItemProvider>
      <NavigationContainer>
         <Stack.Navigator initialRouteName ="Index">
           <Stack.Screen name="My Reading Diary" component={NavBar} options={{
             headerStyle:{
              backgroundColor: '#007aff',
            },
           }}/>
           <Stack.Screen name="NewDiaryEntry" component={NewDiaryEntry} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="ViewHistoryItem"
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
           <Stack.Screen 
             name="Photo"
             component={StoredPictures}
             options={{ title: "View your photo!" }}
           />
         </Stack.Navigator>
       </NavigationContainer>
     </ItemProvider>
  );
 }
export default App;