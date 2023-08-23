// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import * as firebase from "firebase/app";
// import {initializeApp, auth} from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSOFpNiRPL8h938rThGO0KL05j2OF_hWM",
  authDomain: "fir-auth-4d7c7.firebaseapp.com",
  projectId: "fir-auth-4d7c7",
  storageBucket: "fir-auth-4d7c7.appspot.com",
  messagingSenderId: "210792750823",
  appId: "1:210792750823:web:b0515b22b71b2ecef14c42",
  measurementId: "G-P066P403LL"
};

//Testing

// const app = initializeApp(firebaseConfig);


// Initialize Firebase

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const auth = firebase.auth()

export {auth}

// const analytics = getAnalytics(app);

//IOS AuthO login: 52070670777-l08gl4tcg6516upr16cline0qbp811lm.apps.googleusercontent.com