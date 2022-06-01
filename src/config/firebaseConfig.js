import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCmaP7HEJwXRl4DW0dm5U5Iyo6Ij8dUYjg",
    authDomain: "todolist-task-fd435.firebaseapp.com",
    projectId: "todolist-task-fd435",
    storageBucket: "todolist-task-fd435.appspot.com",
    messagingSenderId: "785574439355",
    appId: "1:785574439355:web:035d07ec451f4bbbf83c9e"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore()

export default firebase;