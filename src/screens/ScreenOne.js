import React from 'react';
 import { View, Text, Button } from 'react-native';

 const ScreenOne = ({navigation}) => {
   return (
     <View>
         <Text>This is screen one :)</Text>
         <Button 
             title = "Index"
             onPress = {() => navigation.navigate('Index')}
         />
         <Button 
             title = "Screen 2"
             onPress = {() => navigation.navigate('ScreenTwo')}
         />
     </View>
   );
 }

 export default ScreenOne; 