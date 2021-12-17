import React, { useEffect, useState, useReducer} from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import NavButton from '../components/NavButton';
import { MaterialIcons } from '@expo/vector-icons';

const dummyData = [
  {
    id: 0,
    title: "This is my first entry",
    content: "I thought this book was really nice and easy to read.",
    date: new Date()
  },
  {
    id: 1,
    title: "This is my 2nd entry",
    content: "I thought this book was not good.",
    date: new Date()
  },
  {
    id: 2,
    title: "This is my 3rd entry",
    content: "This is my favourite book.",
    date: new Date()
  },
  {
    id: 3,
    title: "This is my 4th entry",
    content: "This was a hard book to read.",
    date: new Date()
  },
  {
    id: 4,
    title: "This is my 5th entry",
    content: "I liked the pictures in this book.",
    date: new Date()
  },
  {
    id: 5,
    title: "This is my 6th entry",
    content: "This was okay.",
    date: new Date()
  },
  {
    id: 6,
    title: "This is my 7th entry",
    content: "I like fiction.",
    date: new Date()
  },
  {
    id: 7,
    title: "This is my 8th entry",
    content: "I can read good.",
    date: new Date()
  },
  {
    id: 8,
    title: "This is my 9th entry",
    content: "I did not like this book because it was boring.",
    date: new Date()
  },
  {
    id: 9,
    title: "This is my 10th entry",
    content: "I liked the pictures in this book.",
    date: new Date()
  },
  {
    id: 10,
    title: "This is my 11th entry",
    content: "This book has lots of long words.",
    date: new Date()
  },
  {
    id: 11,
    title: "This is my 12th entry",
    content: "I thought this book was not good.",
    date: new Date()
  },
]

const reducer = (state, action) => {
  switch (action.type) {
    // CREATE, UPDATE, DELETE endpoints
    case 'Create':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: action.payload.title,
          pages: action.payload.pages,
          content: action.payload.content,
          date: new Date()
        }
      ]
    case 'Update':
      return state.map((e) => {
        if (e.id === action.payload.id) {
          return action.payload;
        } else {
          return e;
        }
      });
    case 'Delete':
      return state.filter((e) => e.id !== action.payload.id);
    default:
      return state;
  }
}

 const History = ({navigation}) => {
    const [state, dispatch] = useReducer(reducer, dummyData)

  
    useEffect(() => {
      navigation.setOptions({
        headerRight: () => 
          <Pressable onPress={() => navigation.navigate(
              "NewDiaryEntry", {callback: (payload) => {
                dispatch({type: "Create", payload: payload})
              }})}
            >
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