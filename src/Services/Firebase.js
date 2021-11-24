import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBNOhO3jr9NTyw6yoUtCCfGslVAaDZLpY0",
  authDomain: "devs-united-mario-conti.firebaseapp.com",
  projectId: "devs-united-mario-conti",
  storageBucket: "devs-united-mario-conti.appspot.com",
  messagingSenderId: "443893937266",
  appId: "1:443893937266:web:a68b84da05dd8cc5dc7eeb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// data base
export const db = getFirestore(app);
