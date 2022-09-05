// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdbhQjpptqHXlUfr8eC-5zp4Yr3FEgQDE",
  authDomain: "caraft-61e06.firebaseapp.com",
  projectId: "caraft-61e06",
  storageBucket: "caraft-61e06.appspot.com",
  messagingSenderId: "688681974386",
  appId: "1:688681974386:web:896643d579e90d74e220eb",
  measurementId: "G-JV4S303KLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage(app);
export default storage;

export const db = getAnalytics(app);