import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyCnMx-H2TfObla0vLqTa3bgehke6KWfg7Y',
  authDomain: 'clash-b5fc2.firebaseapp.com',
  databaseURL: 'https://clash-b5fc2.firebaseio.com',
  projectId: 'clash-b5fc2',
  storageBucket: 'clash-b5fc2.appspot.com',
  messagingSenderId: '1068348961145'
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };
