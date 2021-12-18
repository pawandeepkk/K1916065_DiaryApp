import React from 'react';
import { SafeAreaView, View, Text, ScrollView, StyleSheet} from 'react-native';
import ListItem from '../components/ListItem';
import NavButton from '../components/NavButton';
// import { SafeAreaView } from 'react-native-safe-area-context';


 const IndexScreen = ({navigation}) => {
   return (
     <View style={styles.backgroundContainer}>
         <ScrollView horizontal={false}>
             <Text style={styles.titleText}>Welcome to your very own Reading Diary!</Text>
             <ListItem caption = "This is a picture of a girl reading" image = {require('../../assets/girl-reading.jpg')} />
             <ListItem caption = "This is a picture of a boy reading" image = {require('../../assets/boy-reading.jpg')} />
             <ListItem caption = "This is a picture of a girl reading" image = {require('../../assets/girl-reading.jpg')} />
             <ListItem caption = "This is a picture of a boy reading" image = {require('../../assets/boy-reading.jpg')} />
          </ScrollView>
     </View>
   );
 }

 const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: '#565bfc',
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
    color: '#ffca7a',
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