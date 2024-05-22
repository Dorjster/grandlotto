import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "formdata-b464e",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "122646576196",
  appId: "YOUR_APP_ID",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
