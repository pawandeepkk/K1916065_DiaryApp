import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button} from 'react-native';
import ItemContext from '../contexts/ItemContext';
import NavButton from '../components/NavButton';

const EditItemScreen = ({navigation, route}) => {
    const {id} = route.params;
    const {state, update} = useContext(ItemContext);
    const currentItem = state.find((e) => e.id === id);
    const [title, setTitle] = useState(currentItem.title);
    const [pages, setPages] = useState(currentItem.pages);
    const [content, setContent] = useState(currentItem.content);
    
    return (
        <View>
           <NavButton screenName="Home" screenNav="Index" navigation={navigation} />
            <NavButton screenName="History" screenNav="History" navigation={navigation} />
 
           <Text style={styles.textLabel}>What book did you read today?</Text>
           <TextInput
             style={styles.TextInput} 
             placeholder="Type here"
             value={title}
             onChangeText={(text) => {
               setTitle(text);
             }} 
           />
           <Text style={styles.textLabel}>How many pages did you read?</Text>
           <TextInput
             style={styles.TextInput} 
             placeholder="Type here"
             value={pages}
             onChangeText={(text) => {
               setPages(text);
             }} 
           />
           <Text style={styles.textLabel}>What did you learn from this reading?</Text>
           <TextInput
             style={styles.TextInput} 
             placeholder="Type here"
             value={content}
             onChangeText={(text) => {
               setContent(text);
             }} 
           />
           <Button 
             title="Submit"
             onPress={() => {
               update(currentItem.id, title, pages, content, currentItem.date);
               navigation.navigate('ViewHistoryItem', {
                  id: currentItem.id,
                  title: title,
                  content: content,
                  date: currentItem.date.toUTCString()
                });
             }}
           />
         </View>
    );
  }
 
  const styles = StyleSheet.create({
    TextInput: {
      fontSize: 20,
      padding: 10,
      margin: 5,
      borderWidth: 1,
    },
    textLabel: {
      fontSize: 18,
      paddingLeft: 10,
      marginTop: 10,
    },
  });
  

  export default EditItemScreen;