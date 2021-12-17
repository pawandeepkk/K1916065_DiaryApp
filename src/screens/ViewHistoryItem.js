import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import NavButton from '../components/NavButton';

 const ViewHistoryItem = ({navigation, route}) => {
     const {id, title, content, date} = route.params;
     return (
     <View>
         <NavButton screenName="History" screenNav="History" navigation={navigation} />
         <Text> ID: {id}</Text>
         <Text> TITLE: {title}</Text>
         <Text> CONTENT: {content}</Text>
         <Text> DATE: {new Date(date).toLocaleDateString()}{' '}
                      {new Date(date).toLocaleTimeString()}
         </Text>
         <Button 
           title="Edit this entry" onPress={(() => {
              navigation.navigate('Edit', {id, id})
           })}
         />
     </View>
   );
 }

 const styles = StyleSheet.create({

 });

 export default ViewHistoryItem; 