import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ListItem from '../components/ListItem';
import NavButton from '../components/NavButton';

 const IndexScreen = ({navigation}) => {
   return (
     <View>
         <NavButton screenName="New Diary Entry" screenNav="NewDiaryEntry" navigation={navigation} />
         <NavButton screenName="History" screenNav="History" navigation={navigation} />
         
         <ScrollView horizontal={false}>
             <Text>This is the home screen</Text>
             <ListItem caption = "This is a picture of a girl reading" image = {require('../../assets/girl-reading.jpg')} />
             <ListItem caption = "This is a picture of a boy reading" image = {require('../../assets/boy-reading.jpg')} />
             <ListItem caption = "This is a picture of a girl reading" image = {require('../../assets/girl-reading.jpg')} />
             <ListItem caption = "This is a picture of a boy reading" image = {require('../../assets/boy-reading.jpg')} />
          </ScrollView>
     </View>
   );
 }

 export default IndexScreen; 