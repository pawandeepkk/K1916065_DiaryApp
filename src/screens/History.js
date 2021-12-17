import React, { useContext, useEffect, useReducer} from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import NavButton from '../components/NavButton';
import { MaterialIcons } from '@expo/vector-icons';
import { actionTypes } from '../helpers/actionTypes';
import ItemContext from '../contexts/ItemContext';

 const History = ({navigation}) => {
  const {state} = useContext(ItemContext);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => 
        <Pressable onPress={() => navigation.navigate("NewDiaryEntry")}>
          <MaterialIcons  name="add" size={24} color="blue" />
        </Pressable>
    })
  }, [state]);

  return (
    <View>
        <NavButton screenName="Home" screenNav="Index" navigation={navigation} />
        <NavButton screenName="New Diary Entry" screenNav="NewDiaryEntry" navigation={navigation} />
        <FlatList 
          data={state}
          keyExtractor={(e) => e.id.toString()}
          renderItem={({item}) => {
            return (
              <Pressable onPress={() => {
                navigation.navigate('ViewHistoryItem', {
                  id: item.id,
                  title: item.title,
                  content: item.content,
                  date: item.date.toUTCString()
                });
              }}>
                <View style={styles.itemContainer}>
                  <View style={styles.dateContainer}>
                      <Text style={styles.dateText}>
                        {item.date.toLocaleDateString()}
                      </Text>
                      <Text>{item.date.toLocaleTimeString()}</Text>
                  </View>
                  <View style={styles.contentContainer}>
                    <Text style={styles.titleText}>
                      {item.title}
                    </Text>
                    <Text style={styles.contentText}>
                      {item.content}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )
          }}
        />
    </View>
  );
 };

 const styles = StyleSheet.create({
   itemContainer: {
     marginTop: 15,
     padding: 15,
     borderBottomWidth: 1,
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
     fontSize: 16,
     paddingLeft: 15,
   },
   contentText: {
     fontSize: 12,
     paddingLeft: 15,

   }
 });

 export default History;