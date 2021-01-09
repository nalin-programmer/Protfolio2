import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCh6BADemc9J6cJKVJGD4am6vLhOEnPRfY",
  authDomain: "portfolio-7378b.firebaseapp.com",
  projectId: "portfolio-7378b",
  storageBucket: "portfolio-7378b.appspot.com",
  messagingSenderId: "282443654931",
  appId: "1:282443654931:web:7a201cab2f9d201334dce6",
};

firebase.initializeApp(firebaseConfig);
ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
