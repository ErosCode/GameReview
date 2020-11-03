import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBufzK2pyxtbVBJl2rT83_feAX3ugMTynw",
    authDomain: "gamereview-9b14e.firebaseapp.com",
    databaseURL: "https://gamereview-9b14e.firebaseio.com",
    projectId: "gamereview-9b14e",
    storageBucket: "gamereview-9b14e.appspot.com",
    messagingSenderId: "955482593077",
    appId: "1:955482593077:web:2d05c6caa8ae7236fd1e7c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;