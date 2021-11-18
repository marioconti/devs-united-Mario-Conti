import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQDMwYg9c_Rlm9ZRt4oIq75wQLjCP8urE",
  authDomain: "tweets-1f586.firebaseapp.com",
  projectId: "tweets-1f586",
  storageBucket: "tweets-1f586.appspot.com",
  messagingSenderId: "9793205085",
  appId: "1:9793205085:web:9973e580f612ae4b452eb4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);