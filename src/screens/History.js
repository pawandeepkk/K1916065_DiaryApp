import React from 'react';
 import { View, Text, Button } from 'react-native';

 const History = ({navigation}) => {
   return (
     <View>
         <Text> These are all the books you have read so far! </Text>
         <Button title="Home" 
           onPress={() => navigation.navigate('Index')}
         />
         <Button title="New Diary Entry" 
           onPress={() => navigation.navigate('NewDiaryEntry')}
         />
     </View>
   );
 };

 export default History;