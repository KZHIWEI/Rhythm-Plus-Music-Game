import firebase from "firebase";
import "firebase/firestore";

// firebase init goes here
const config = {
  apiKey: "AIzaSyAdeWHYbSj2iErECQTncQLrz9WdfbuiCsQ",
  authDomain: "rhythm-plus.firebaseapp.com",
  databaseURL: "https://rhythm-plus.firebaseio.com",
  projectId: "rhythm-plus",
  storageBucket: "rhythm-plus.appspot.com",
  messagingSenderId: "327500964227",
  appId: "1:327500964227:web:cc9ce6980b9f9232b356b6",
  measurementId: "G-PNF64CVYX2",
};
firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();
const dbi = firebase.firestore; //db instance
const auth = firebase.auth();
const functions = firebase.functions();
const currentUser = auth.currentUser;

// Initialize Performance Monitoring and get a reference to the service
const perf = firebase.performance();

// Init analytics
firebase.analytics();

// firebase collections
const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const sheetsCollection = db.collection("sheets");
const resultsCollection = db.collection("results");

export {
  db,
  dbi,
  auth,
  currentUser,
  perf,
  functions,
  usersCollection,
  songsCollection,
  sheetsCollection,
  resultsCollection,
};