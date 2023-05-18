// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
// import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq72PSNdRUKPo6q1LlpHEvzMwH2WaFF1I",
  authDomain: "leal-firebase.firebaseapp.com",
  projectId: "leal-firebase",
  storageBucket: "leal-firebase.appspot.com",
  messagingSenderId: "335720260295",
  appId: "1:335720260295:web:e19c816b0da2c2517c54e2",
  measurementId: "G-XEGGH5EX9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Install the Firebase SDK for JavaScript
// const firebase = require("firebase/app");
const storage = firebase.storage();

// Create a Firebase project and add the SDK to your project
firebase.initializeApp();

// // Create a reference to the video file in Firebase Storage
// const videoRef = storage.ref("homepage-video.mov");

// // Get the download URL for the video file
// const downloadUrl = await videoRef.getDownloadURL();

// // Set the source of a video element to the download URL
// const videoElement = document.getElementById("video-fs");
// videoElement.src = downloadUrl;

console.log("Active")
