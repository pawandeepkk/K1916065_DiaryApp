import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import IndexScreen from './src/screens/IndexScreen';
 import NewDiaryEntry from './src/screens/NewDiaryEntry';
 import History from './src/screens/History';
 import ViewHistoryItem from './src/screens/ViewHistoryItem';
 import { ItemProvider } from './src/contexts/ItemContext';
 import EditItemScreen from './src/screens/EditItemScreen';
 import CameraScreen from './src/screens/CameraScreen';
 import StoredPictures from './src/screens/StoredPictures';
 import NavBar from './src/components/NavBar';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ItemProvider>
      <NavigationContainer>
         <NavBar />
       </NavigationContainer>
     </ItemProvider>
  );
 }

export default App;
