import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCUrOXEMV50jyngemaT91Z7gZqiydebLGc",
  authDomain: "cart-1cf5e.firebaseapp.com",
  databaseURL: "https://cart-1cf5e.firebaseio.com",
  projectId: "cart-1cf5e",
  storageBucket: "cart-1cf5e.appspot.com",
  messagingSenderId: "1002125230071",
  appId: "1:1002125230071:web:c46976bcfdba914f79f8f2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

