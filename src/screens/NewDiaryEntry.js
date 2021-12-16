import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';
import NavButton from '../components/NavButton';

 const NewDiaryEntry = ({navigation}) => {
    const [name, setName] = useState('');
    return (
       <View>
          <NavButton screenName="Home" screenNav="Index" navigation={navigation} />
           <NavButton screenName="History" screenNav="History" navigation={navigation} />

          <Text style={styles.textLabel}>Enter your name:</Text>
          <TextInput
            style={styles.TextInput} 
            placeholder="Type here"
            value={name}
            onChangeText={(text) => {
              setName(text);
            }} 
          />
          <Text style={styles.textLabel}>Your name is {name}</Text>
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