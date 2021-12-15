import React from 'react';
 import { View, Text, Button } from 'react-native';

 const ScreenTwo = ({navigation}) => {
   return (
     <View>
         <Text> This is screen two :D </Text>
         <Button title="Index" 
           onPress={() => navigation.navigate('Index')}
         />
         <Button title="Screen 1" 
           onPress={() => navigation.navigate('ScreenOne')}
         />
     </View>
   );
 };

 export default ScreenTwo;