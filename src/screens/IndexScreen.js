import React from 'react';
 import { View, Text, Button } from 'react-native';

 const IndexScreen = ({navigation}) => {
   return (
     <View>
         <Button 
             title="Screen 1"
             onPress={() => navigation.navigate('ScreenOne')}
         />
         <Button 
             title="Screen 2"
             onPress={() => navigation.navigate('ScreenTwo')}
         />
             <Text>Pawan</Text>
     </View>
   );
 }

 export default IndexScreen; 