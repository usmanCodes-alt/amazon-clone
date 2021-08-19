import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDi2vhOxN1O5q8G7K5Wba2t36Kol5awj4c",
  authDomain: "clone-94963.firebaseapp.com",
  projectId: "clone-94963",
  storageBucket: "clone-94963.appspot.com",
  messagingSenderId: "254676593561",
  appId: "1:254676593561:web:5a10fcceb22ca654d38108",
});

const auth = firebase.auth();

export { auth };
