import firebase from 'firebase/compat/app'
import "firebase/compat/auth";
import { getDatabase, ref, set, child, get } from "firebase/database";
import "firebase/compat/database"
import "firebase/compat/firestore";
import "firebase/compat/functions";
import "firebase/compat/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpmjhnQt779khVqeEdaj35i_tuAnaAwcY",
  authDomain: "streaming-app-e3e3f.firebaseapp.com",
  databaseURL: "https://streaming-app-e3e3f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "streaming-app-e3e3f",
  storageBucket: "streaming-app-e3e3f.appspot.com",
  messagingSenderId: "442560438677",
  appId: "1:442560438677:web:a9fcba0a3e3cdac419d69c"
};

// let database;
let app;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = getDatabase()

export const getFireDB = () => {
  const dbRef = ref(getDatabase());

  return ref(database, '/')
}