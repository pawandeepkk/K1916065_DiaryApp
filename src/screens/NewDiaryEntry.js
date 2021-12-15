import React from 'react';
 import { View, Text, Button } from 'react-native';

 const NewDiaryEntry = ({navigation}) => {
   return (
     <View>
         <Text>This is screen one :)</Text>
         <Button 
             title = "Home"
             onPress = {() => navigation.navigate('Index')}
         />
         <Button 
             title = "History"
             onPress = {() => navigation.navigate('History')}
         />
     </View>
   );
 }

 export default NewDiaryEntry; 