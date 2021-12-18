import React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import ListItem from '../components/ListItem';
import NavButton from '../components/NavButton';
// import { SafeAreaView } from 'react-native-safe-area-context';


 const IndexScreen = ({navigation}) => {
   return (
     <SafeAreaView>
         <ScrollView horizontal={false}>
          <NavButton screenName="New Diary Entry" screenNav="NewDiaryEntry" navigation={navigation} />
          <NavButton screenName="History" screenNav="History" navigation={navigation} />
          <NavButton screenName="Camera" screenNav="Camera" navigation={navigation} />
             <Text>This is the home screen</Text>
             <ListItem caption = "This is a picture of a girl reading" image = {require('../../assets/girl-reading.jpg')} />
             <ListItem caption = "This is a picture of a boy reading" image = {require('../../assets/boy-reading.jpg')} />
             <ListItem caption = "This is a picture of a girl reading" image = {require('../../assets/girl-reading.jpg')} />
             <ListItem caption = "This is a picture of a boy reading" image = {require('../../assets/boy-reading.jpg')} />
          </ScrollView>
     </SafeAreaView>
   );
 }

 export default IndexScreen; 