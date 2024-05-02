import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
firebase.initializeApp({
  apiKey: "AIzaSyD7aU1U7zF7UCgy7TwGcWqeYw8WA5zunt0",
  authDomain: "auth-chat-7f05e.firebaseapp.com",
  projectId: "auth-chat-7f05e",
  storageBucket: "auth-chat-7f05e.appspot.com",
  messagingSenderId: "140041352758",
  appId: "1:140041352758:web:bb60da5cb0aaaaba440a97"
})
export const Context = createContext(null)
const auth = firebase.auth()
const firestore = firebase.firestore()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
    <App />
  </Context.Provider>,
)

