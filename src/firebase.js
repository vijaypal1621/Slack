// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDSo6jjThKXAH25KKBmTkodEw5PKKQai9k",
    authDomain: "slack-7a2de.firebaseapp.com",
    databaseURL: "https://slack-7a2de.firebaseio.com",
    projectId: "slack-7a2de",
    storageBucket: "slack-7a2de.appspot.com",
    messagingSenderId: "661440223682",
    appId: "1:661440223682:web:515d0252e498267b77de5b",
    measurementId: "G-F4W3PQKTDK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth , provider };
export default db;