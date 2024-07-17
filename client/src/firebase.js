// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMkd0CwDzDXtkh00MTwMFufOIeOM23FA0",
  authDomain: "cojeb-property-sale.firebaseapp.com",
  projectId: "cojeb-property-sale",
  storageBucket: "gs://cojeb-property-sale.appspot.com",
  messagingSenderId: "473961665170",
  appId: "1:473961665170:web:6130d90211fa5abfc58c4b",
  measurementId: "G-RPZ79QK0P0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseApp = app;  // Assurez-vous d'exporter l'instance d'application correcte
export const firebaseAnalytics = analytics;  // Exportez l'instance d'Analytics si nécessaire