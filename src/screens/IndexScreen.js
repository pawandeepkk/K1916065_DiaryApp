import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import ListItem from '../components/ListItem';

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