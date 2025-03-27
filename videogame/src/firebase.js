// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAwR8ftyTYMnsUVyXSOOKz5FjnaaNbgtGU",
    authDomain: "smashcompany-f25ed.firebaseapp.com",
    databaseURL: "https://smashcompany-f25ed-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "smashcompany-f25ed",
    storageBucket: "smashcompany-f25ed.firebasestorage.app",
    messagingSenderId: "373964501545",
    appId: "1:373964501545:web:9e9a30d333bc8de06b2238"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;