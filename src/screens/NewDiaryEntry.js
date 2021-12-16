import React from 'react';
import { View, Text} from 'react-native';
import NavButton from '../components/NavButton';

 const NewDiaryEntry = ({navigation}) => {
   return (
     <View>
        <NavButton screenName="Home" screenNav="Index" navigation={navigation} />
         <NavButton screenName="History" screenNav="History" navigation={navigation} />
         <Text>This is screen one :)</Text>
     </View>
   );
 }

 export default NewDiaryEntry; 