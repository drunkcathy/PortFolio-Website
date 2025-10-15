// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv_IWUdtVU5ScMZGhlvQOyC3AF9L6sRJw",
  authDomain: "porftfolio-767f7.firebaseapp.com",
  projectId: "porftfolio-767f7",
  storageBucket: "porftfolio-767f7.firebasestorage.app",
  messagingSenderId: "853658992365",
  appId: "1:853658992365:web:2c34f34d9d72cf49b756e4",
  measurementId: "G-LTC2PV4MYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);