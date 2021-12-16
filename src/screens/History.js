import React from 'react';
import { View, Text } from 'react-native';
import NavButton from '../components/NavButton';

 const History = ({navigation}) => {
   return (
     <View>
         <NavButton screenName="Home" screenNav="Index" navigation={navigation} />
         <NavButton screenName="New Diary Entry" screenNav="NewDiaryEntry" navigation={navigation} />
         <Text> These are all the books you have read so far! </Text>
     </View>
   );
 };

 export default History;