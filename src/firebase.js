import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCxCiyNmqBqvzmdV4bLCdoyGCequElpY1U",
  authDomain: "plater8-ba3b1.firebaseapp.com",
  databaseURL: "https://plater8-ba3b1.firebaseio.com",
  projectId: "plater8-ba3b1",
  storageBucket: "plater8-ba3b1.appspot.com",
  messagingSenderId: "857474503510"
};
firebase.initializeApp(config);

//var database = firebase.database();

var firebaseRunk = firebase.database().ref("Runk");
var firebaseOHill = firebase.database().ref("OHill");
var firebaseNewcomb = firebase.database().ref("Newcomb");

export { firebaseRunk, firebaseOHill, firebaseNewcomb };
