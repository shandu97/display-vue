import firebase from 'firebase';
import 'firebase/firestore';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDq3aPWZd7hxgnmcFunE57rt67Xqjams2Q",
    authDomain: "display-deeae.firebaseapp.com",
    databaseURL: "https://display-deeae.firebaseio.com",
    projectId: "display-deeae",
    storageBucket: "display-deeae.appspot.com",
    messagingSenderId: "883689820343"
};
const firebaseApp = firebase.initializeApp(config);

//export firestore database 
export default firebaseApp.firestore() 
