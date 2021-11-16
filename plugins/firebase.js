// import { initializeApp, getApps } from "firebase/app"
// import { getFirestore } from "firebase/firestore"

// const firebaseConfig = {
//     apiKey: 'AIzaSyBSNhJDb4p14s6QoyLivkOhEWMzm9u2258',
//     authDomain: 'nurie-75640.firebaseapp.com',
//     databaseURL: 'https://nurie-75640-default-rtdb.firebaseio.com',
//     projectId: 'nurie-75640',
//     storageBucket: 'nurie-75640.appspot.com',
//     messagingSenderId: '350970030067',
//     appId: '1:350970030067:web:75ece8923ad777be839486'
// }
// const apps = getApps()
// if (!apps.length) {
//     firebaseApp = initializeApp(firebaseConfig)
// } else {
//     firebaseApp = apps[0]
// }
// const db = getFirestore(firebaseApp, {})
// export { db }

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSNhJDb4p14s6QoyLivkOhEWMzm9u2258",
  authDomain: "nurie-75640.firebaseapp.com",
  databaseURL: "https://nurie-75640-default-rtdb.firebaseio.com",
  projectId: "nurie-75640",
  storageBucket: "nurie-75640.appspot.com",
  messagingSenderId: "350970030067",
  appId: "1:350970030067:web:75ece8923ad777be839486"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
