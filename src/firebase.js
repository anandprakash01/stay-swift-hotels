// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4ksJqmbKgOcHRkDnVlePU4BNf9zmKvRg",
  authDomain: "stay-swift-hotels-420a7.firebaseapp.com",
  projectId: "stay-swift-hotels-420a7",
  storageBucket: "stay-swift-hotels-420a7.appspot.com",
  messagingSenderId: "952100870567",
  appId: "1:952100870567:web:e919de10fbef17c7c2be82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//add and export this
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};
