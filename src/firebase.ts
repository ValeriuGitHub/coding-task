import firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgl1KQdUqqusYnObP9O29G0cY4VjUydK4",
  authDomain: "coding-task-258dd.firebaseio.com",
  projectId: "coding-task-258dd",
  storageBucket: "coding-task-258dd.appspot.com",
  databaseURL: "https://coding-task-258dd.firebaseio.com",
  messagingSenderId: "824915380245",
  appId: "1:824915380245:web:d7cb0600c07d527b7d261c",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
