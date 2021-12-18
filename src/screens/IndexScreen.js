import React from 'react';
import { View, Text, ScrollView, StyleSheet} from 'react-native';
import ListItem from '../components/ListItem';


 const IndexScreen = ({navigation}) => {
   return (
     <View style={styles.backgroundContainer}>
         <ScrollView horizontal={false}>
             <Text style={styles.titleText}>Welcome to your very own Reading Diary!</Text>
             <ListItem caption = "This is the home page!" image = {require('../../assets/girl-reading.jpg')} />
             <ListItem caption = "You can make a new entry every time you read!" image = {require('../../assets/boy-reading.jpg')} />
             <ListItem caption = "Be sure to take a picture of your book!" image = {require('../../assets/reading-together.jpg')} />
             <ListItem caption = "Why not ask your parents to write comments on your reading?" image = {require('../../assets/book.jpg')} />
             <ListItem caption = "Track your progress in the history page!" image = {require('../../assets/nature-reading.jpg')} />
             <ListItem caption = "Have fun!!" image = {require('../../assets/imagination.jpg')} />
          </ScrollView>
     </View>
   );
 }

 const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: '#f2cc8f',
  },
  itemContainer: {
    marginTop: 15,
    padding: 15,
    backgroundColor: '#009387',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  titleText: {
    fontFamily: 'ChalkboardSE-Bold',
    color: '#003049',
    fontWeight: "bold",
    fontSize: 30,
    textAlign: 'center',
    padding: 5,
  },
  contentText: {
    fontSize: 12,
    paddingLeft: 15,
  }
});

 export default IndexScreen; 