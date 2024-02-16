import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCzwwTYz9cijpHAWiHpG_TUzTt4EuMxvU4",
  authDomain: "chat-app-75308.firebaseapp.com",
  projectId: "chat-app-75308",
  storageBucket: "chat-app-75308.appspot.com",
  messagingSenderId: "585892541238",
  appId: "1:585892541238:web:93414031a0224818347997",
  measurementId: "G-73PRD4VZWM"
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const fireStore = getFirestore(app);
const storage = getStorage(app);

export { app, fireStore, storage };