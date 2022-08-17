/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
// const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
// };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEOEwP_cwETfaUBYFJDXWhPqpkMRaAxU8",
  authDomain: "fire1st-4bfcc.firebaseapp.com",
  projectId: "fire1st-4bfcc",
  storageBucket: "fire1st-4bfcc.appspot.com",
  messagingSenderId: "151722005878",
  appId: "1:151722005878:web:9945a0fe93b20bad1f9657"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export function getFirebaseConfig() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return firebaseConfig;
  }};