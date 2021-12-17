import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button} from 'react-native';
import ItemContext from '../contexts/ItemContext';
import NavButton from '../components/NavButton';

const NewDiaryEntry = ({navigation, route}) => {
  const {create} = useContext(ItemContext);
  const [title, setTitle] = useState("");
  const [pages, setPages] = useState("");
  const [content, setContent] = useState("");

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
          <NavButton screenName="Take a picture!" screenNav="Camera" navigation={navigation} />
          <Button 
            title="Submit"
            onPress={() =>{
              //TO DO : add new screen instead of navigation.pop
              create(title, pages, content, () => navigation.pop());
              
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

 export default NewDiaryEntry; 