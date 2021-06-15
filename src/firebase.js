import firebase from "firebase/app";

import "firebase/auth";

//setting up the firebase authentication configs 
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAX0Dbsud3ZdJrl3XPlN84lxKXfMWxKcio",
    authDomain: "chatter-409ba.firebaseapp.com",
    projectId: "chatter-409ba",
    storageBucket: "chatter-409ba.appspot.com",
    messagingSenderId: "36913425203",
    appId: "1:36913425203:web:677c02d9eb198a4bdc2c46"
  }).auth();