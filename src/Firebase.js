// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPwA2SMdPEeSE512Gp3KvGyvWC0r0x5HA",
  authDomain: "blogging-app-ae60b.firebaseapp.com",
  projectId: "blogging-app-ae60b",
  storageBucket: "blogging-app-ae60b.appspot.com",
  messagingSenderId: "322615584091",
  appId: "1:322615584091:web:9e1ac1f0fbf9b2fb2aa67e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);