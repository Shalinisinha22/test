import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import {GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyAL17qwfkkcFsKNf2rD4V6sAt-8YMhIGdk",
    authDomain: "curefine-33732.firebaseapp.com",
    projectId: "curefine-33732",
    storageBucket: "curefine-33732.appspot.com",
    messagingSenderId: "449551446238",
    appId: "1:449551446238:web:b139d1ba06e017c35cd24f"
  };
  firebase.initializeApp(firebaseConfig);
  export const auth=firebase.auth();
  export const firestore=firebase.firestore()
  export const  provider=new GoogleAuthProvider()
  export const storage=firebase.storage()