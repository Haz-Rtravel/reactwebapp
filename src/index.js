import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoView from "./components/VideoView";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getDatabase, ref, set, child, get, onValue } from "firebase/database";
import "firebase/compat/database";
import "firebase/compat/firestore";
import "firebase/compat/functions";
import "firebase/compat/storage";
import VideoUpload from "./components/VideoUpload";

const firebaseConfig = {
  apiKey: "AIzaSyDpmjhnQt779khVqeEdaj35i_tuAnaAwcY",
  authDomain: "streaming-app-e3e3f.firebaseapp.com",
  databaseURL:
    "https://streaming-app-e3e3f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "streaming-app-e3e3f",
  storageBucket: "streaming-app-e3e3f.appspot.com",
  messagingSenderId: "442560438677",
  appId: "1:442560438677:web:a9fcba0a3e3cdac419d69c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = getDatabase();

const dbRef = ref(db);

console.log(db);

const connectedRef = ref(db, ".info/connected");
onValue(connectedRef, (snap) => {
  if (snap.val() === true) {
    console.log("connected");
  } else {
    console.log("not connected");
  }
});

get(child(dbRef, "/")).then((snapshot) => {
  console.log("===========================");
  if (snapshot.exists()) {
    console.log("data available");
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
});

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/watch/:id" element={<VideoView />} />
      <Route path="/upload" element={<VideoUpload />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
