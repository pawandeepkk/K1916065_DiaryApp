import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import NavButton from '../components/NavButton';

 const ViewHistoryItem = ({navigation, route}) => {
     const {id, title, content, date} = route.params;
     return (
     <View>
         <NavButton screenName="History" screenNav="History" navigation={navigation} />
         <Text> id: {id}</Text>
         <Text> TITLE: {title}</Text>
         <Text> CONTENT: {content}</Text>
         <Text> DATE: {new Date(date).toLocaleDateString()}{' '}
                      {new Date(date).toLocaleTimeString()}
         </Text>
     </View>
   );
 }

 const styles = StyleSheet.create({

 });

 export default ViewHistoryItem; 