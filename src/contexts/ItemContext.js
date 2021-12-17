import React from "react";
import { useReducer } from "react/cjs/react.development";
import { actionTypes } from "../helpers/actionTypes";

const ItemContext = React.createContext();
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
      case actionTypes.create:
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
      case actionTypes.update:
        return state.map((e) => {
          if (e.id === action.payload.id) {
            return action.payload;
          } else {
            return e;
          }
        });
      case actionTypes.delete:
        return state.filter((e) => e.id !== action.payload.id);
      default:
        return state;
    }
  }

export const ItemProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, dummyData);
    const addItem = (title, pages, content, callback) => {
        dispatch({type: actionTypes.create, payload: {title, pages, content}})
        if (callback) {
            callback();
        }
    }

    const deleteItem = (id, callback) => {
        dispatch({type: actionTypes.delete, payload: {id:id}})
        if (callback) {
            callback();
        }
    }
    
    return (
        <ItemContext.Provider value={{
            state: state,
            create: addItem,
            remove: deleteItem,
        }}>
            {children}
        </ItemContext.Provider>
    )
};

export default ItemContext;