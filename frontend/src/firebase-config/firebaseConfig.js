// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwZ1WNFqEyFi-3hRM6biKlACxlKC1s2p4",
  authDomain: "spaceexplorer-fc4c4.firebaseapp.com",
  projectId: "spaceexplorer-fc4c4",
  storageBucket: "spaceexplorer-fc4c4.appspot.com",
  messagingSenderId: "176014432645",
  appId: "1:176014432645:web:384b4dff059437cb94ccec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;