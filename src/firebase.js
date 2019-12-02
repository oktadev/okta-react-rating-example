import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};
// const firebaseConfig = {
//   apiKey: 'AIzaSyD6YG0BEoe84RCOfzjyOd6XljvMHM7R4Pw',
//   authDomain: 'brewstr-19ddc.firebaseapp.com',
//   databaseURL: 'https://brewstr-19ddc.firebaseio.com',
//   projectId: 'brewstr-19ddc',
//   storageBucket: 'brewstr-19ddc.appspot.com',
//   messagingSenderId: '463911497782',
//   appId: '1:463911497782:web:4463c4a76cdaed028e2897'
// };

firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();
export const BrewstrRef = databaseRef.child('ratings');