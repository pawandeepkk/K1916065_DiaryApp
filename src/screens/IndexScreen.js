import React from 'react';
 import { View, Text, Button } from 'react-native';

 const IndexScreen = ({navigation}) => {
   return (
     <View>
         <Button 
             title="New Diary Entry"
             onPress={() => navigation.navigate('NewDiaryEntry')}
         />
         <Button 
             title="History"
             onPress={() => navigation.navigate('History')}
         />
             <Text>Pawan</Text>
     </View>
   );
 }

 export default IndexScreen; 