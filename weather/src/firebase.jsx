import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAlRaOgITc94nO3PbPiS7-sxeksUFgSBVM",
  authDomain: "fir-auth1608.firebaseapp.com",
  projectId: "fir-auth1608",
  storageBucket: "fir-auth1608.appspot.com",
  messagingSenderId: "457182087601",
  appId: "1:457182087601:web:8804e4bc1d6aee6451d590",
  measurementId: "G-0PCHN856R0"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
