// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxLjONd7vc8yFUTDcU_18Q4NLtRurOKlA",
  authDomain: "nwitter-nomad-001.firebaseapp.com",
  projectId: "nwitter-nomad-001",
  storageBucket: "nwitter-nomad-001.appspot.com",
  messagingSenderId: "181122975497",
  appId: "1:181122975497:web:491094f83189fb7f84b5d8",
  measurementId: "G-BSV63WB7GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
